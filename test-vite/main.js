import '@/imageLoader'
import '@/svgLoader'
import { name, age } from '@assets/json/index.json'
// 企业项目：如果生产环境非常臃肿和性能差
// 控制导入

// 摇树优化
console.log(name, age) //在其他的构建工具里json文件会以字符串形式存在

fetch('/api/users', {
  method: 'post'
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})