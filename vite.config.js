import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, 'index.html'),
                lab: resolve(import.meta.dirname, 'text-lab.html')
            }
        }
    }
})

