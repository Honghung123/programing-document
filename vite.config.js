import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePluginMdToHTML } from "vite-plugin-md-to-html";

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        // loader: "tsx",
        // include: /src\/.*\.[tj]sx?$/,
        exclude: [],
    },
    plugins: [
        {
            name: "load-js-files-as-jsx",
            setup(build) {
                build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
                    loader: "jsx",
                    contents: await fs.readFile(args.path, "utf8"),
                }));
            },
        },
        react(),
        vitePluginMdToHTML({
            syntaxHighlighting: true,
            resolveImageLinks: true,
        }),
    ],
    optimizeDeps: {
        force: true,
        esbuildOptions: {
            loader: {
                ".js": "jsx",
            },
        },
    },
    server: {
        port: 5000,
    },
});
