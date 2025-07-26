import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";

// https://vitejs.dev/config/
// export default defineConfig({
//     esbuild: {
//         // loader: "jsx",
//         // include: /src\/.*\.jsx?$/,
//         loader: "tsx",
//         include: /src\/.*\.[t]sx?$/,
//         exclude: [],
//     },
//     plugins: [
//         {
//             // name: "load-js-files-as-jsx",
//             // setup(build) {
//             //     build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
//             //         loader: "jsx",
//             //         contents: await fs.readFile(args.path, "utf8"),
//             //     }));
//             // },

//         },
//         react(),
//         vitePluginMdToHTML({
//             syntaxHighlighting: true,
//             resolveImageLinks: true,
//         }),
//     ],
//     optimizeDeps: {
//         force: true,
//         esbuildOptions: {
//             loader: {
//                 // ".js": "jsx",
//                 ".ts": "tsx",
//             },
//         },
//     },
//     server: {
//         port: 5000,
//     },
// }); 

export default defineConfig({
  // Project root directory (defaults to cwd)
  root: process.cwd(),

  // Base public path when served in production
  base: '/',

  // Development server options
  server: {
    port: 3000,
    open: true, // Open browser on server start
  },

  esbuild: {
    loader: "tsx",
    include: /src\/.*\.[t]sx?$/,
  },

  // Build options
  build: {
    outDir: 'dist', // Output directory for build
    minify: true, // Minify output
  },

  // Plugins to extend Vite's functionality
  plugins: [
    // Example: @vitejs/plugin-react for React projects
    react(), 
    vitePluginMdToHTML({
      syntaxHighlighting: true,
      resolveImageLinks: true,
    }),
  ],

  // Resolve options for module imports
  resolve: {
    alias: {
      '@': '/src', // Example alias for /src directory
    },
  },

  // CSS preprocessor options
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss";`,
      },
    },
  },
});