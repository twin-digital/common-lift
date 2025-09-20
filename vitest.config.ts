import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
      "**/.playwright-browsers/**",
    ],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@db": resolve(__dirname, "./src/generated/prisma"),
      "@test": resolve(__dirname, "./test"),
    },
  },
});
