import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  assetsInclude: ["src/assets", "**/*.JPG", "**/*.jpeg"],
  build: {
    outDir: "build",
  },
});
