import {defineConfig} from 'vite'
import checker from 'vite-plugin-checker'
import path from 'path'

export default defineConfig({
  build: {
    minify: false,
    // 打包配置
    rollupOptions: {
      // 多入口文件
      input: {
        main: path.resolve(__dirname, "./index.html"),
        product: path.resolve(__dirname, "./src/product.html")
      },
      // 分包策略
      output: {
        manualChunks: (id: string) => {
          if(id.includes("node_modules")) {
            return "vendor";
          }
          console.log(id);
        }
      }
    }
  },
  plugins: [checker({
    typescript: true
  })]
})