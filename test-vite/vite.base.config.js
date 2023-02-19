import { defineConfig } from "vite";
import { ViteAliases } from "./node_modules/vite-aliases";
import viteCompression from 'vite-plugin-compression'
import _myViteAliases from './plugins/viteAliases';
import { viteMockServe } from 'vite-plugin-mock'
import path from "path";
// const postcssPresetEnv = require('postcss-preset-env')
export default defineConfig({
  optimizeDeps: {
    exclude: [],
  },
  envPrefix: "ENV_",
  css: {
    // modules配置最终会最终丢给postcss modules
    modules: {
      //对css模块化的默认行为进行覆盖
      localsConvention: "camelCaseOnly", //修改生成的配置对象的key的展现形式(驼峰或者中划线)
      scopeBehaviour: "local", //配置当前的模块化行为是模块化还是全局化 local开启模块化(默认), global关闭
      generateScopedName: "[name]_[local]_[hash:5]", //定义类名展示格式
      // generateScopedName: (name, filename, css) => {
      //   // name -> css文件中的类名
      //   // filename -> 当前css文件的绝对路径
      //   // css -> 当前样式
      //   console.log(name, filename, css)
      //   // 配置成函数返回值决定显示类名
      //   return `${name}_${Math.random().toString(36).substring(3, 8)}`;
      // }
      hashPrefix: "hello", //生成hash类名前缀
      globalModulePaths: [], //不想参与css模块化的路径
    },
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
    assetsInlineLimit: 4096,
    outDir: "dist",
    assetsDir: "static",
    emptyOutDir: true, //打包清除输出目录,重新构建, 默认true
  },
  plugins: [
    _myViteAliases(),
    viteCompression(),
    viteMockServe()
    // ViteAliases(),
  ],
});
