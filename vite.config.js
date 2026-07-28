import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist/client",
    rollupOptions: {
      external: (id) => id === "three" || id.startsWith("three/addons/"),
    },
  },
});
