import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Rutas relativas para evitar problemas de cache
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
