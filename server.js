const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 3000);
const distRoot = path.join(__dirname, "dist");
const publicRoot = path.join(__dirname, "public");

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
};

function serveFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, body) => {
    if (err) {
      res.statusCode = 404;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end("Page not found");
      return;
    }
    res.statusCode = 200;
    res.setHeader("Content-Type", contentType || "application/octet-stream");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    res.setHeader(
      "Cache-Control",
      path.extname(filePath) === ".html" ? "no-cache" : "public, max-age=86400"
    );
    res.end(body);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost");

  // Health check endpoint
  if (url.pathname === "/healthz") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ ok: true, service: "gradmint-site" }));
  }

  let pathname = decodeURIComponent(url.pathname);

  // Serve static assets from dist/ (built JS/CSS) first, then public/
  if (
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml" ||
    pathname === "/favicon.svg" ||
    pathname.startsWith("/assets/")
  ) {
    // Built assets (JS, CSS) live in dist/assets/
    const target = path.resolve(distRoot, pathname.replace(/^\/+/, ""));
    if (target.startsWith(distRoot + path.sep)) {
      const ext = path.extname(target);
      return serveFile(res, target, types[ext]);
    }
    // Fall back to public/ for static files like robots.txt
    const publicTarget = path.resolve(publicRoot, pathname.replace(/^\/+/, ""));
    if (publicTarget.startsWith(publicRoot + path.sep)) {
      const ext = path.extname(publicTarget);
      return serveFile(res, publicTarget, types[ext]);
    }
    res.writeHead(403);
    return res.end("Forbidden");
  }

  // For all other routes, serve the React app's index.html (client-side routing)
  const indexPath = path.join(distRoot, "index.html");
  serveFile(res, indexPath, types[".html"]);
});

server.listen(port, "0.0.0.0", () => {
  console.log("Gradmint site listening on " + port);
});

module.exports = server;