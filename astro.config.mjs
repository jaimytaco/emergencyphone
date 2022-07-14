import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    build: {
        format: 'file'
    },
    vite: {
        build: {
            minify: false
        }

        // build: {
        //     minify: "esbuild",
        //     rollupOptions: {
        //         input: [ '/astro/hoisted.js?q=0' ],
        //         output: {
        //             format: "esm",
        //             entryFileNames: "[name].[hash].js",
        //             chunkFileNames: "chunks-astro/[name].[hash].js",
        //             assetFileNames: "assets/[name].[hash][extname]"
        //         },
        //         preserveEntrySignatures: "exports-only"
        //     },
        //     target: "esnext"
        // }
    }
});
