import "../css/app.css"
import "./bootstrap"
import { createInertiaApp } from "@inertiajs/svelte"
// import AppLayout from "$layouts/AppLayout.svelte"
// import OutsideLayout from "$layouts/OutsideLayout.svelte"

createInertiaApp({
    progress: {
        // Change the progress bar color.
        // color: "#ff0000",
    },

    resolve: (name) => {
        const pages = import.meta.glob("../pages/**/*.svelte", { eager: true })

        const page = pages[`../pages/${name}.svelte`]

        return {
            default: page.default,
            // layout: page.layout || (name.startsWith("outside") ? OutsideLayout : AppLayout),
        }
    },

    setup({ el, App, props }) {
        new App({ target: el, props })
    },
})
