const fs = require("fs");
const https = require("https");
require("dotenv").config();

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID;

const TIMEOUT = 15000; // 15 seconds

const ERR = {
  noUserName:
    "❌ GitHub Username is undefined. Please set all relevant environment variables.",
  requestFailed:
    "❌ Request to GitHub failed. Check the GitHub token or connectivity.",
  requestFailedMedium:
    "❌ Request to Medium failed. Check Medium username or connectivity.",
  requestFailedYouTube:
    "❌ Request to YouTube failed. Check the API key, channel ID, or quota."
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
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://www.youtube.com/feeds/videos.xml?channel_id=${YOUTUBE_CHANNEL_ID}`,
    port: 443,
    method: "GET",
    family: 4,
    timeout: TIMEOUT
  };

  safeRequest(
    rssOptions,
    null,
    rssData => {
      const feed = JSON.parse(rssData);
      saveVideos(
        (feed.items || []).map(item => ({
          id: item.guid.replace("yt:video:", ""),
          title: item.title,
          description: item.description,
          thumbnail: item.thumbnail,
          url: item.link
        }))
      );
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
      fs.writeFile("./public/profile.json", data, err => {
        if (err) console.error("❌ Failed to write GitHub data:", err);
        else console.log("✅ Saved GitHub data to public/profile.json");
      });
    },
    err => {
      console.error("❌ GitHub fetch failed:", err.message);
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

if (YOUTUBE_API_KEY && YOUTUBE_CHANNEL_ID) {
  console.log("▶️ Fetching latest YouTube videos...");

  const channelPath = `/youtube/v3/channels?part=contentDetails&id=${YOUTUBE_CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
  const channelOptions = {
    hostname: "www.googleapis.com",
    path: channelPath,
    port: 443,
    method: "GET",
    family: 4,
    timeout: TIMEOUT
  };

  safeRequest(
    channelOptions,
    null,
    channelData => {
      const channel = JSON.parse(channelData);
      const uploadsPlaylistId = channel.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

      if (!uploadsPlaylistId) {
        console.error(ERR.requestFailedYouTube);
        return;
      }

      const videosPath = `/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${uploadsPlaylistId}&key=${YOUTUBE_API_KEY}`;
      const videosOptions = { ...channelOptions, path: videosPath };

      safeRequest(
        videosOptions,
        null,
        videosData => {
          const videos = JSON.parse(videosData);
          const latestVideos = (videos.items || []).map(item => ({
            id: item.snippet.resourceId.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail:
              item.snippet.thumbnails?.high?.url ||
              item.snippet.thumbnails?.medium?.url,
            url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`
          }));

          saveVideos(latestVideos);
        },
        err => {
          console.error(`⚠️ YouTube API unavailable (${err.message}). Using RSS fallback.`);
          fetchYouTubeRss();
        }
      );
    },
    err => {
      console.error(`⚠️ YouTube API unavailable (${err.message}). Using RSS fallback.`);
      fetchYouTubeRss();
    }
  );
}
