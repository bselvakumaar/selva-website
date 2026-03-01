import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, loadEnv } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    base: './',
    define: {
      'process.env': env
    },
    plugins: [
      inspectAttr(),
      react(),
      {
        name: 'html-transform',
        transformIndexHtml(html) {
          return html.replace(/%(.*?)%/g, (match, p1) => env[p1] || match)
        }
      }
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
