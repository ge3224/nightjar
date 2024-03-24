import { defineConfig, configDefaults } from "vitest/config";

export default defineConfig({
  test: {
    alias: {
      "@/": new URL("./src/", import.meta.url).pathname,
    },
  },
});
