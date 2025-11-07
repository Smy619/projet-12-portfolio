import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",

  optimizeDeps: {
    include: ["framer-motion", "aos", "glightbox", "swiper"],
  },

  resolve: {
    dedupe: ["react", "react-dom"],
  },

  build: {
    sourcemap: false,
    minify: "esbuild",
    cssMinify: true,
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: ["aos", "glightbox", "swiper", "framer-motion"],
        },
      },
    },
  },
});
