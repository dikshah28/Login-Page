import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // This routes any request starting with '/api' to your local backend
      '/api': {
        target: 'http://localhost:5000', // <-- Change this to your backend's port!
        changeOrigin: true,
        base: '/Login-Page/',
      },
    },
  },
})