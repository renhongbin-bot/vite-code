const Koa = require('koa') //不是使用esmodule, 必须使用commonjs规范
const fs = require('fs')
const path = require('path')

const viteConfig = require('./vite.config')
const aliasResolver = require('./aliasResolver')
console.log(viteConfig)

const app = new Koa()

app.use(async (ctx)=> { //context 上下文 request 请求信息 response 响应信息
  console.log('ctx', ctx.request, ctx.response)
  if(ctx.request.url === '/') {
    const indexContent = await fs.promises.readFile(path.resolve(__dirname, './index.html')) //在服务端不会这么用
    ctx.response.body = indexContent;
    ctx.response.set("Content-Type", "text/html")
  }
  // 判断以js结尾
  if(ctx.request.url.endsWith('.js')) {
    const JSContent = await fs.promises.readFile(path.resolve(__dirname, '.' + ctx.request.url)) //在服务端不会这么用
    ctx.response.body = JSContent;
    console.log(JSContent)
    // 进行alias替换
    const lastResult = aliasResolver(viteConfig.resolve.alias, JSContent.toString())
    ctx.response.body = lastResult
    ctx.response.set("Content-Type", "text/javascript")
  }
})

app.listen(3007, () => {
  console.log('vite Dev server listen 3007')
})
