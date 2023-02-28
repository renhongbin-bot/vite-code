import { defineConfig } from 'vite'

export default defineConfig({
  server: {//开发服务器中的配置
    proxy: {
      "/api": { //key+描述对象 以后再遇到/api开头的请求我们都代理到target属性中的域去
        target: "https://www.360.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '') // 是否要重写请求路径
      }
    }
  }
})