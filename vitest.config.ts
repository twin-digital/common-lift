import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./test/vitest/setup.ts"],
    globals: true,
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/build/**",
      "**/e2e/**",
    ],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@test": resolve(__dirname, "./test"),
    },
  },
});
