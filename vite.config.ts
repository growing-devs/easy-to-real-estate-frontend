import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve('src') }],
  },
  server: {
    port: 3000,
    https: true,
  },
  build: {
    commonjsOptions: {
      defaultIsModuleExports(id) {
        try {
          const module = require(id);
          if (module?.default) {
            return false;
          }
          return 'auto';
        } catch (error) {
          return 'auto';
        }
      },
      transformMixedEsModules: true,
    },
    minify: false,
  },
});
