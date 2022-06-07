import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
import { UserConfig } from 'vite'
import Checker from 'vite-plugin-checker'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}

const shouldAnalyze = process.env.ANALYZE

const config: UserConfig = {
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: `${pathResolve('src')}/`
      }
    ]
  },
  build: {
    rollupOptions: {
      plugins: shouldAnalyze ? [visualizer({ open: true, filename: './bundle-size/bundle.html' })] : []
    },
    sourcemap: !!shouldAnalyze
  },
  plugins: [
    react(),
    Checker({
      typescript: true,
      overlay: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"' // for example, lint .ts & .tsx
      }
    })
  ],
  define: {
    global: {}
  }
}

/* "define" prevents
 * Uncaught ReferenceError: global is not defined
 */

const getConfig = () => config

export default getConfig
