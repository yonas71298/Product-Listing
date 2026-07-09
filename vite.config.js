import { defineConfig, transformWithOxc } from 'vite'
import react from '@vitejs/plugin-react'

/** Enables JSX syntax in .js files per assignment structure. */
const transformJsxInJs = () => ({
  name: 'transform-jsx-in-js',
  enforce: 'pre',
  async transform(code, id) {
    if (!id.match(/src\/.*\.js$/)) return null
    return await transformWithOxc(code, id, { lang: 'jsx' })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({ include: /\.(jsx|js)$/ }), transformJsxInJs()],
  optimizeDeps: {
    noDiscovery: true,
    include: ['react', 'react-dom', 'react-dom/client', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
  },
})
