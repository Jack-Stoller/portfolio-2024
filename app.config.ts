import { defineConfig } from "@solidjs/start/config";
import solidSvg from 'vite-plugin-solid-svg'

export default defineConfig({
    vite: {
        // vite options
        plugins: [solidSvg()],
    },
});
