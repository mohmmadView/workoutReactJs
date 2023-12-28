import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: "8020",
  },
  preview: {
    host: "0.0.0.0",
    port: "2020",
  },
  plugins: [react()],
});
