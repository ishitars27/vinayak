import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5174, // ✅ Ensure this matches your Vite server port
    strictPort: true,
    watch: {
      usePolling: true,
    },
    allowedHosts: ["all"], // ✅ Must be an array
    cors: {
      origin: "*", // ✅ Allow all origins
      methods: ["GET", "POST", "PUT", "DELETE"], // ✅ Allow necessary HTTP methods
      allowedHeaders: ["Content-Type", "Authorization"], // ✅ Allow headers
    },
  },
});
