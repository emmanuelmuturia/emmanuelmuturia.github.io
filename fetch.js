const fs = require("fs");
const https = require("https");
const {XMLParser} = require("fast-xml-parser");
require("dotenv").config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const TIMEOUT = 15000; // 15 seconds

const ERR = {
  noUserName:
    "❌ GitHub Username is undefined. Please set all relevant environment variables.",
  requestFailed:
    "❌ Request to GitHub failed. Check the GitHub token or connectivity.",
  requestFailedMedium:
    "❌ Request to Medium failed. Check Medium username or connectivity.",
  requestFailedYouTube: "❌ Failed to fetch the public YouTube channel feed."
};

function safeRequest(options, dataToSend, onSuccess, onFail) {
  const req = https.request(options, res => {
    let data = "";

    res.on("data", chunk => {
      data += chunk;
    });

    res.on("end", () => {
      if (res.statusCode !== 200) {
        return onFail(new Error(`HTTP ${res.statusCode}: ${data}`));
      }

      if (data.includes("rate limit")) {
        return onFail(
          new Error("Rate limit exceeded by GitHub. Try again later.")
        );
      }

      onSuccess(data);
    });
  });

  req.on("timeout", () => {
    req.destroy();
    onFail(new Error("Request timed out"));
  });

  req.on("error", onFail);
  req.setTimeout(TIMEOUT);

  if (dataToSend) req.write(dataToSend);
  req.end();
}

function saveGitHubProfile(data) {
  fs.writeFile("./public/profile.json", JSON.stringify(data), err => {
    if (err) console.error("❌ Failed to write GitHub data:", err);
    else console.log("✅ Saved GitHub data to public/profile.json");
  });
}

function fetchPublicRepositories() {
  const repositoriesOptions = {
    hostname: "api.github.com",
    path: `/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
    port: 443,
    method: "GET",
    family: 4,
    timeout: TIMEOUT,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node.js"
    }
  };

  safeRequest(
    repositoriesOptions,
    null,
    repositoriesData => {
      const repositories = JSON.parse(repositoriesData);
      const edges = repositories.map(repository => ({
        node: {
          name: repository.name,
          description: repository.description,
          forkCount: repository.forks_count,
          stargazers: {totalCount: repository.stargazers_count},
          url: repository.html_url,
          id: repository.node_id,
          diskUsage: 0,
          primaryLanguage: repository.language
            ? {name: repository.language, color: "#888"}
            : null
        }
      }));

      saveGitHubProfile({
        data: {
          user: {
            name: GITHUB_USERNAME,
            bio: "",
            avatarUrl: "",
            location: null,
            pinnedItems: {edges}
          }
        }
      });
    },
    err => console.error("❌ GitHub repositories fallback failed:", err.message)
  );
}

function saveVideos(videos) {
  fs.writeFile(
    "./public/videos.json",
    JSON.stringify(videos.slice(0, 3), null, 2),
    err => {
      if (err) console.error("❌ Failed to write YouTube data:", err);
      else console.log("✅ Saved YouTube data to public/videos.json");
    }
  );
}

function fetchYouTubeRss() {
  const rssOptions = {
    hostname: "www.youtube.com",
    path: `/feeds/videos.xml?channel_id=${encodeURIComponent(YOUTUBE_CHANNEL_ID)}`,
    port: 443,
    method: "GET",
    family: 4,
    timeout: TIMEOUT
  };

  safeRequest(
    rssOptions,
    null,
    rssData => {
      const feed = new XMLParser({ignoreAttributes: false}).parse(rssData);
      const entries = feed.feed?.entry || [];
      const latestVideos = (Array.isArray(entries) ? entries : [entries])
        .map(entry => {
          const id = entry["yt:videoId"];
          const links = Array.isArray(entry.link) ? entry.link : [entry.link];
          const alternateLink = links.find(
            link => link?.["@_rel"] === "alternate"
          );
          const thumbnails = entry["media:group"]?.["media:thumbnail"];
          const thumbnail = Array.isArray(thumbnails)
            ? thumbnails[0]
            : thumbnails;

          return {
            id,
            title: entry.title,
            description: entry["media:group"]?.["media:description"] || "",
            thumbnail: thumbnail?.["@_url"],
            url:
              alternateLink?.["@_href"] ||
              `https://www.youtube.com/watch?v=${id}`
          };
        })
        .filter(video => video.id && video.title && video.thumbnail);

      if (latestVideos.length === 0) {
        console.error(ERR.requestFailedYouTube);
        return;
      }

      saveVideos(latestVideos);
    },
    err => console.error(ERR.requestFailedYouTube, err.message)
  );
}

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    console.error(ERR.noUserName);
    process.exit(1);
  }

  console.log(`📦 Fetching GitHub profile for "${GITHUB_USERNAME}"...`);

  const githubQuery = JSON.stringify({
    query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      edges {
        node {
          ... on Repository {
            name
            description
            forkCount
            stargazers { totalCount }
            url
            id
            diskUsage
            primaryLanguage { name color }
          }
        }
      }
    }
  }
}`
  });

  const githubOptions = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    family: 4, // ✅ Use IPv4 only
    timeout: TIMEOUT,
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "Node.js"
    }
  };

  safeRequest(
    githubOptions,
    githubQuery,
    data => {
      const profile = JSON.parse(data);
      const edges = profile.data?.user?.pinnedItems?.edges || [];

      if (edges.some(edge => edge && edge.node)) {
        saveGitHubProfile(profile);
      } else {
        console.warn(
          "⚠️ No pinned GitHub repositories found. Using public repositories fallback."
        );
        fetchPublicRepositories();
      }
    },
    err => {
      console.error("❌ GitHub fetch failed:", err.message);
      fetchPublicRepositories();
    }
  );
}

if (MEDIUM_USERNAME) {
  console.log(`📰 Fetching Medium blogs for "${MEDIUM_USERNAME}"...`);

  const mediumOptions = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET",
    family: 4,
    timeout: TIMEOUT
  };

  safeRequest(
    mediumOptions,
    null,
    data => {
      fs.writeFile("./public/blogs.json", data, err => {
        if (err) console.error("❌ Failed to write Medium data:", err);
        else console.log("✅ Saved Medium data to public/blogs.json");
      });
    },
    err => {
      console.error("❌ Medium fetch failed:", err.message);
    }
  );
}

if (YOUTUBE_CHANNEL_ID) {
  console.log("▶️ Fetching latest YouTube videos...");
  fetchYouTubeRss();
}
