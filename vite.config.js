import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub USER PAGE requires base: "/"
export default defineConfig({
  plugins: [react()],
  
  // DO NOT change this — your domain matches your repo name
  base: "/", 

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
