import { defineConfig } from 'vite'
import createWebsitePlugin from '../build/vite-plugin-website'

export default defineConfig({
  root: __dirname,
  plugins: createWebsitePlugin(),
  define: {
    'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`,
    __DEV__: process.env.NODE_ENV !== 'production'
  },
  optimizeDeps: {
    include: ['vue'],
    exclude: ['__ENTRY__']
  }
})