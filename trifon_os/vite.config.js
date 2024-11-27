import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    sourcemap: true,  // Disable source maps
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})