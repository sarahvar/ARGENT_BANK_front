import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

// Charge les variables d'environnement du fichier .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
