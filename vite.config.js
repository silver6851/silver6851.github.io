import { defineConfig } from 'vite'

export default defineConfig({
  base: '/', // Para repositorios username.github.io no se necesita subdirectorio
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
