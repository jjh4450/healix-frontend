import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr';
import path from 'path';
import compression from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(),
    compression({
      include: /\.(js|css|html|svg)$/,
      threshold: 1400,
    }),
  ],
  assetsInclude: ['**/*.lottie'],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
    },
  },
  server: {
    port: 7023,
    proxy: {
      '/auth/google': {
        target: 'https://webapp-healix-prod.azurewebsites.net',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth\/google/, '/auth/google')
      }
    }
  },
})
