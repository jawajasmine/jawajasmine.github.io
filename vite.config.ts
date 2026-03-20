import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// jawajasmine.github.io is a user GitHub Pages site → served from root '/'
export default defineConfig({
  plugins: [react()],
  base: '/',
})
