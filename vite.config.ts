import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env,
  },
  optimizeDeps: {
    include: ['lucide-react']
  },
  server: {
    fs: {
      strict: false
    },
    port: 5173,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx'],
  },
})