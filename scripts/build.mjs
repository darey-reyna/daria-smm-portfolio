import { build } from "vite";
import { cp, mkdir, rm, writeFile } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await build();

await mkdir("dist/server", { recursive: true });
await mkdir("dist/.openai", { recursive: true });

await cp(".openai/hosting.json", "dist/.openai/hosting.json");
await cp("script.js", "dist/client/script.js");
await writeFile(
  "dist/server/index.js",
  `export default {
  async fetch(request, env) {
    if (env.ASSETS) return env.ASSETS.fetch(request);
    return new Response("Static assets binding is unavailable.", { status: 500 });
  },
};
`,
);
