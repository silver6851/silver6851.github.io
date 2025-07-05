import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Usar rutas relativas para GitHub Pages
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
