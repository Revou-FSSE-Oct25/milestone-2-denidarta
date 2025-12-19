import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                bullsAndCows: resolve(__dirname, 'src/pages/bulls-and-cows.html'),
                rockPaper: resolve(__dirname, 'src/pages/rock-paper.html'),
                flipCard: resolve(__dirname, 'src/pages/flip-card.html'),
            },
        },
    },
})
