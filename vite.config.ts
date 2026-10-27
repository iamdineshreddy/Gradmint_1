import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// eslint-disable-next-line
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
  },
  server: {
    port: 5173,
  },
})