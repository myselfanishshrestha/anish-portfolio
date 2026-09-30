import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function prerender() {
  try {
    const serverPath = path.resolve(__dirname, "../.output/server/index.mjs");
    if (!fs.existsSync(serverPath)) return;

    const server = await import(`file://${serverPath}`);
    const res = await server.default.fetch(
      new Request("http://localhost/"),
      { ASSETS: { fetch: () => new Response("404", { status: 404 }) } },
      { waitUntil: () => {} }
    );

    if (res.status === 200) {
      const html = await res.text();
      const publicDir = path.resolve(__dirname, "../.output/public");
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }
      fs.writeFileSync(path.join(publicDir, "index.html"), html, "utf-8");
      fs.writeFileSync(path.join(publicDir, "404.html"), html, "utf-8");
      console.log("✓ Prerendered static index.html and 404.html into .output/public for GitHub Pages!");
    }
  } catch (err) {
    console.error("Prerender notice:", err.message);
  }
}

prerender();
