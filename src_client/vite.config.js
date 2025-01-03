import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: '../client_packages',
    rollupOptions: {
      input: path.resolve(__dirname, './src/index.js'),
      output: {
        format: 'iife',
        entryFileNames: 'index.js',
      },
    },
  },
  plugins: [],
});
