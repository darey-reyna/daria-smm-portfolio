import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/daria-smm-portfolio/" : "/",
  build: {
    outDir: "dist/client",
    rollupOptions: {
      external: (id) => id === "three" || id.startsWith("three/addons/"),
    },
  },
});
