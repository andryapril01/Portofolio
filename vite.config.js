import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { defineConfig } from 'vite'

const profilePhotoSource = path.resolve(
  'C:/Users/andry/.cursor/projects/b-PROJECT-PORTOFOLIO-andryporto/assets/c__Users_andry_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_Foto_Prof-ba7c48cc-248d-435b-8b00-c59eeaa9ae84.png',
)

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@profile-photo': profilePhotoSource,
    },
  },
  server: {
    fs: {
      allow: ['.', profilePhotoSource],
    },
  },
})
