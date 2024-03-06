import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ vue({
        template: {
            compilerOptions: {
                isCustomElement: tag => tag.includes('-')
            }
        }
    }), ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        outDir: 'dist/elements',
        rollupOptions: {
            input: {
                'i18n-host': resolve(__dirname, 'src/elements/i18n-host.ts'),
                'metrics-display': resolve(__dirname, 'src/elements/metrics-display.ts'),
                'counter': resolve(__dirname, 'src/elements/counter.ts'),
                'locale-picker': resolve(__dirname, 'src/elements/locale-picker.ts'),
                'control-panel': resolve(__dirname, 'src/elements/control-panel.ts'),
            },
            output: {
                entryFileNames(chunkInfo) {
                    return `${chunkInfo.name}.js`
                },
            },
        }
    }

})
