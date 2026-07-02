const http = require("http");
const fs = require("fs");
const path = require("path");

function loadEnvFile() {
  const envPath = path.join(__dirname, ".env");
  if (!fs.existsSync(envPath)) {
    return;
  }

  fs.readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) {
        return;
      }
      const index = trimmed.indexOf("=");
      const key = trimmed.slice(0, index).trim();
      const value = trimmed.slice(index + 1).trim().replace(/^["']|["']$/g, "");
      if (key && !process.env[key]) {
        process.env[key] = value;
      }
    });
}

loadEnvFile();

const PORT = Number(process.env.PORT || 3000);
const GRAPH_VERSION = process.env.FACEBOOK_GRAPH_VERSION || "v23.0";
const FACEBOOK_PAGE_ID = process.env.FACEBOOK_PAGE_ID;
const FACEBOOK_PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;

const rootDir = __dirname;
const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Cache-Control": statusCode === 200 ? "public, max-age=180" : "no-store"
  });
  response.end(JSON.stringify(payload));
}

function getAttachmentMedia(attachments) {
  const item = attachments && attachments.data && attachments.data[0];
  if (!item) {
    return {};
  }

  const nested = item.subattachments && item.subattachments.data && item.subattachments.data[0];
  const media = item.media || (nested && nested.media) || {};
  const image = media.image || {};

  return {
    thumbnail: image.src || "",
    type: item.type && item.type.includes("video") ? "video" : item.type || ""
  };
}

function normalizePost(post) {
  const media = getAttachmentMedia(post.attachments);
  return {
    id: post.id,
    message: post.message || post.story || "",
    created_time: post.created_time,
    permalink_url: post.permalink_url,
    thumbnail: media.thumbnail || post.full_picture || "",
    type: media.type || ""
  };
}

async function handleFacebookPosts(request, response) {
  if (!FACEBOOK_PAGE_ID || !FACEBOOK_PAGE_ACCESS_TOKEN) {
    sendJson(response, 500, {
      error: "Facebook API is not configured. Set FACEBOOK_PAGE_ID and FACEBOOK_PAGE_ACCESS_TOKEN on the server."
    });
    return;
  }

  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const limit = Math.min(Math.max(Number(requestUrl.searchParams.get("limit") || 6), 1), 9);
  const after = requestUrl.searchParams.get("after") || "";
  const fields = [
    "id",
    "message",
    "story",
    "created_time",
    "permalink_url",
    "full_picture",
    "attachments{type,url,media,subattachments}"
  ].join(",");

  const graphUrl = new URL(`https://graph.facebook.com/${GRAPH_VERSION}/${FACEBOOK_PAGE_ID}/posts`);
  graphUrl.searchParams.set("fields", fields);
  graphUrl.searchParams.set("limit", String(limit));
  graphUrl.searchParams.set("access_token", FACEBOOK_PAGE_ACCESS_TOKEN);
  if (after) {
    graphUrl.searchParams.set("after", after);
  }

  try {
    const graphResponse = await fetch(graphUrl);
    const payload = await graphResponse.json();

    if (!graphResponse.ok) {
      sendJson(response, graphResponse.status, {
        error: payload.error && payload.error.message ? payload.error.message : "Facebook Graph API request failed."
      });
      return;
    }

    sendJson(response, 200, {
      posts: Array.isArray(payload.data) ? payload.data.map(normalizePost) : [],
      next: payload.paging && payload.paging.cursors ? payload.paging.cursors.after || "" : ""
    });
  } catch (error) {
    sendJson(response, 502, { error: "Unable to connect to Facebook Graph API." });
  }
}

function serveStatic(request, response) {
  const requestUrl = new URL(request.url, `http://${request.headers.host}`);
  const pathname = decodeURIComponent(requestUrl.pathname);
  const safePath = pathname === "/" ? "/index.html" : pathname;
  const filePath = path.normalize(path.join(rootDir, safePath));

  if (!filePath.startsWith(rootDir)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream"
    });
    response.end(content);
  });
}

http
  .createServer((request, response) => {
    if (request.url.startsWith("/api/facebook-posts")) {
      handleFacebookPosts(request, response);
      return;
    }

    serveStatic(request, response);
  })
  .listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
