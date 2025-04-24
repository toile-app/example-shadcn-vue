import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  define: {
    'process.env': JSON.stringify({}),
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
  },

  build: {
    lib: {
      entry: fileURLToPath(new URL('./src/components.ts', import.meta.url)),
      name: 'toile-example-shadcn-vue',
      fileName: 'toile-example-shadcn-vue',
      formats: ['es'],
    },

    rollupOptions: {
      external: ['vue'],
    },
  },
})
