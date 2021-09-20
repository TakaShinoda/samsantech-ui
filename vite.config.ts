import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:
    process.env.NODE_ENV === 'development'
    ? {}
    : {
      lib: {
        // ライブラリモードの時に読み込むエントリーポイントとライブラリ名を指定
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'samsantech-ui'
      },
      rollupOptions: {
        // バンドル生成時に依存関係をそのままにしておきたいもの
        external: ['vue'],

        output: {
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
})
