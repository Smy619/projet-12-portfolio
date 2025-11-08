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
    cssCodeSplit: true,
    cssMinify: true,
    chunkSizeWarningLimit: 800, 

    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },
});


