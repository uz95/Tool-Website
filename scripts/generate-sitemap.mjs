import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL("../app/", import.meta.url));
const routes = [];
async function scan(directory, segments = []) {
  const entries = await readdir(directory, { withFileTypes: true });
  if (entries.some(entry => entry.isFile() && /^page\.(tsx|ts|jsx|js)$/.test(entry.name))) routes.push("/" + segments.join("/"));
  for (const entry of entries) {
    if (!entry.isDirectory() || /^[_.@]/.test(entry.name) || entry.name === "api") continue;
    if (entry.name.includes("[")) throw new Error(`Add explicit sitemap support for dynamic route ${path.join(directory, entry.name)}`);
    await scan(path.join(directory, entry.name), entry.name.startsWith("(") ? segments : [...segments, entry.name]);
  }
}
await scan(root);
await writeFile(path.join(root, "sitemap-routes.json"), JSON.stringify([...new Set(routes)].sort(), null, 2) + "\n");
console.log(`Generated ${new Set(routes).size} static sitemap routes.`);
