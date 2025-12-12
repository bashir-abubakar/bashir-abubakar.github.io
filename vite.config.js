import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// For GitHub Pages at https://bashirabubakar.github.io/
// MUST use base: "/" for user/organization pages
export default defineConfig({
  plugins: [react()],
  base: "/", 
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
