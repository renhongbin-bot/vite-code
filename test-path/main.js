/**
 * commonjs 规范注入几个变量__dirname
 * */ 

const fs = require('fs'); //处理文件模块（读文件，修改文件等一系列操作）
const path= require('path') // path本质上是字符串处理模块，它里面有非常多的路径字符串处理方法

const result = fs.readFileSync(path.resolve(__dirname, "./variable.css")); //我们希望去基于main.js进行绝对路径的生成
// console.log('result', result.toString(), process.cwd(), __dirname)
console.log(arguments)

// node端读取文件或操作文件，如果发现你使用的是相对路径，则会去使用process.cwd()来进行对应的拼接
// process.cwd 获取当前的执行目录

// __dirname:始终返回当前文件所在目录， 涉及到commonjs规范的原理