import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [vue()],
    server: {
      proxy: {
        '/sliya': {
          target: process.env.VITE_API_URL || "http://localhost:9715",
          secure: mode === "production" ? true : false,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/sliya/, '')
        }
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true
        }
      }
    }
  })
}
