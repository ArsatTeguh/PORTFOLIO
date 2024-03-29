import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import {ViteImageOptimizer} from 'vite-plugin-image-optimizer'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    plugins: [
      VitePWA({
        injectRegister: "auto",
        workbox: {
          globPatterns: ["**/*.{js,jsx,css,html,ico,png,svg}"],
          clientsClaim: true,
          skipWaiting: true,
          ExpirationPlugin: true,
          precacheAndRoute: true,
          createHandlerBoundToURL: true,
          registerRout: true,
          StaleWhileRevalidate: true,
        },
      }),
    ],
    // outDir: "dist",
    // chunkSizeWarningLimit: 10000,
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (id.includes("node_modules")) {
    //         return id
    //           .toString()
    //           .split("node_modules/")[1]
    //           .split("/")[0]
    //           .toString();
    //       }
    //     },
    //   },
    // },
  },
  plugins: [react(),
  ViteImageOptimizer({
    jpg: {
      quality:50
    },
    png: {
      quality:50
    },
    svg: {
      quality:50
    },
  })
  ],
  server: {
    port: 3000,
  },
  assetsInclude: ["**/*.jpg/*.png"],
});
