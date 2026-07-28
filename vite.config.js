import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: (id) => id === "three" || id.startsWith("three/addons/"),
    },
  },
});
