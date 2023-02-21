module.exports = (options) => {
  return {
    // 转换HTML
    transformIndexHtml: (html, ctx) => {
      console.log(html)
      // ctx 表示当前整个请求的执行器上下文: api
      return html.replace(/<%= title %>/g, options.inject.data.title)
    }
  }
}