const fs = require("fs");
const path = require("path");
module.exports = (options) => {
  // 拦截HTTP请求
  // 当打给本地开发服务器时, viteserver服务器接管
  return {
    configureServer(server) {
      // 服务器相关配置
      // req 请求对象
      // res 响应对象
      // next 将处理结果交给下一个中间件
      const mockStat = fs.statSync("mock");
      const isDirectoy = mockStat.isDirectory();
      let mockResult;
      if (isDirectoy) {
        mockResult = require(path.resolve(process.cwd(), "mock/index.js"));
      }
      server.middlewares.use((req, res, next) => {
        // 判断我们请求的地址在mockResult里面有没有
        const matchItem = mockResult.find(
          (mockDescriptor) => mockDescriptor.url === req.url
        );
        if (matchItem) {
          const responseData = matchItem.response(req);
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(responseData));
          // process() --->获取执行的根目录
        } else {
          next();
        }
      }); //配置中间件
    },
  };
};
