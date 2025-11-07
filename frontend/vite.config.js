import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  //  Base path for deployment (e.g., GitHub Pages or custom domain) 
  base: "/",

  //  Dependencies to pre-bundle for faster dev server startup 
  optimizeDeps: {
    include: ["framer-motion", "aos", "glightbox", "swiper"],
  },

  //  Prevent React duplication in nested dependencies 
  resolve: {
    dedupe: ["react", "react-dom"],
  },

  build: {
    //  Build output settings 
    sourcemap: false, // Disable sourcemaps in production
    minify: "esbuild", // Use fast ESBuild minification
    cssMinify: true,
    chunkSizeWarningLimit: 500, // Suppress warnings for large chunks

    // Split CSS and JS into smaller chunks (faster initial load) 
    cssCodeSplit: true,

    // Rollup output configuration 
    rollupOptions: {
      output: {
        // Split vendor libraries into separate chunks
        manualChunks: {
          react: ["react", "react-dom"],
          vendor: ["aos", "glightbox", "swiper", "framer-motion"],
        },

        // Add cache-busting hash to filenames
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },

    // Production JS optimization 
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log statements
        drop_debugger: true, // Remove debugger statements
      },
    },
  },

  // Clean up build output (remove license comments, etc.) 
  esbuild: {
    legalComments: "none",
  },

  // Experimental: preconnect and preload optimization for fonts & CSS
  experimental: {
    renderBuiltUrl(filename) {
      if (filename.endsWith(".woff2") || filename.endsWith(".css")) {
        return {
          preload: true,
          preconnect: true,
        };
      }
    },
  },
});

