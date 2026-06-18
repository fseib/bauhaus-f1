import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bauhaus-f1/', // 🔥 REEMPLAZÁ ACA con el nombre exacto de tu repo de GitHub
})