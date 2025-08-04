import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist'
  },
  server: {
    port: 3000
  },
  // This is needed for React Router to work properly
  resolve: {
    alias: {
      '@': '/src',
    },
  }
})
