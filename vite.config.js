import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
  // Use '/' for a custom domain (tinycorp.io).
  // If deploying to https://<user>.github.io/tinycorp.io/ (no custom domain),
  // change this to '/tinycorp.io/'
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        conduit: resolve(process.cwd(), 'conduit.html'),
      },
    },
  },
})
