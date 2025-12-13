import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  // Correct base path for a GitHub user site:
  base: "/bashir-abubakar.github.io/",

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
