import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Triply-v2.3/',
  server: {
    host: true,
    port: 5173
  }
});
