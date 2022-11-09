import replace from '@rollup/plugin-replace';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    replace({
      values: {
        'process.env': 'import.meta.env'
      },
      preventAssignment: true
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000
  },
  preview: {
    port: 3000
  }
});
