import { defineConfig } from "vite"
import path from 'path'
export default defineConfig({
  optimizeDeps: {
    exclude: []
  },
  envPrefix: 'ENV_', //配置vite注入客户端环境变量的前缀
  preprocessorOptions: { //key + config key代表预处理器名
    less: { //整个配置最终都会给到less的执行参数里去
      // webpack里通过less-loader去配置
      math: "always",
      globalVars: { //设置全局变量
        mainColor: "red"
      }
    }
  },
  devSourcemap: true,
  // vite诞生会让postcss再火一次
  postcss: {
    plugins: [postcssPresetEnv()]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') //设置别名
    }
  },
  build: {
    // 配置rollup的一些构建策略
    rollupOptions: {
      // 控制输出
      output: {
        // rollup里， hash代表文件名和文件内容组合计算得到的随机字符串
        assetFileNames: "[hash].[name].[ext]",
      },
    },
    assetsInlineLimit: 4096, //转化为base64图片文件的最大值， 默认4096 4kb
    outDir: "dist", //打包输出目录
    assetsDir: 'static' //打包静态资源目录
  },
})