import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/bashir-abubakar.github.io/",  // THIS fixes GitHub Pages routing
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
