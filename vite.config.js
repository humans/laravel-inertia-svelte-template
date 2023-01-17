import fs from 'fs'
import path from 'path'
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { svelte } from "@sveltejs/vite-plugin-svelte"
import preprocess from "svelte-preprocess"

require("dotenv").config()

const server =
    process.env.APP_ENV === "local"
        ? {
            host: process.env.VITE_SSL_HOST,
            hmr: {
                host: process.env.VITE_SSL_HOST,
            },
            https: {
                key: fs.readFileSync(process.env.VITE_SSL_KEY),
                cert: fs.readFileSync(process.env.VITE_SSL_CERTIFICATE),
            },
        }
        : {}

export default defineConfig({
    server,

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

    resolve: {
        alias: {
            $components: path.resolve('resources/js/components'),
        }
    }
});
