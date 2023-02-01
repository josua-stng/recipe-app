import { defineConfig, ServerOptions } from 'vite'
import react from '@vitejs/plugin-react'

const serverOption:ServerOptions={
  port:3000
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:serverOption
})
