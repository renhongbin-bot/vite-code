// 帮助我们学习如何加载静态图片资源

import stylePicUrl from '@assets/images/2.webp' //原始

// 服务端  raw会去读取图片文件资源的内容 ---> Buffer 二进制字符串
console.log(stylePicUrl)

const img = document.createElement('img')
img.src = stylePicUrl

document.body.appendChild(img)