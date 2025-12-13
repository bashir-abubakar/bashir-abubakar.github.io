import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages user site (username.github.io)
export default defineConfig({
  plugins: [react()],
  base: "/",   // ← this is the correct working value you had originally
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
