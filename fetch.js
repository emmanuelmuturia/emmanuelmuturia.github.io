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
    "❌ Request to Medium failed. Check Medium username or connectivity."
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
