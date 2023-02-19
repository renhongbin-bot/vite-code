// 配置css插槽
// 预设环境里面 是会包含很多插件的
// 语法降级 -->
// 编译插件 -->
const postcssPresetEnv  = require('postcss-preset-env')
// 预设:一次性把必要插件全部安装
// 语法编译 less ccss
module.exports = {
  plugins: [postcssPresetEnv(/** pluginOptions */)]
}