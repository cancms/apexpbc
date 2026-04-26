import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: '/apexpbc/',  // 👈 关键配置：子路径
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
