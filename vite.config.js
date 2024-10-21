import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    esbuild: {
        loader: "jsx",
        include: /src\/.*\.jsx?$/,
        // loader: "tsx",
        // include: /src\/.*\.[tj]sx?$/,
        exclude: [],
    },
    assetsInclude: ["**/*.md"],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".md"],
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
        port: 3000,
    },
});
