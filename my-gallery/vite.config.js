import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/efimover.github.io/my-gallery/',
  plugins: [react()]
})

// export default defineConfig({
//     plugins: [react()],
//     build: {
//         outDir: 'dist'
//     }
// })
