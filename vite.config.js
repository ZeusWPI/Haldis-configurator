import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls },
        }),
        quasar({
            sassVariables: "src/styles/quasar-variables.sass",
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname),
        },
    },
});
