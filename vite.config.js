import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from "@sveltejs/vite-plugin-svelte"
import preprocess from "svelte-preprocess"

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        svelte({
            prebundleSvelteLibraries: true,
            preprocess: preprocess({
                postcss: {
                    plugins: [
                        require("tailwindcss/nesting"),
                        require("tailwindcss")("./tailwind.config.js"),
                        require("autoprefixer"),
                    ],
                },
            }),
        }),
    ],
});
