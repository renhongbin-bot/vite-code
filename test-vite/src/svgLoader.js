import svgIcon from '@assets/svg/哺乳动物.svg'

import svgRaw from '@assets/svg/哺乳动物.svg?raw'
console.log(svgRaw)
document.body.innerHTML = svgRaw
const svgEle = document.getElementsByTagName('svg')[0]
const svgStyle = svgEle.getElementsByTagName('style')[0]
svgEle.onmouseenter = function () {
    // svg改变颜色要根据内置层级决定
    this.style.fill = 'red'
}
// 第一种使用svg方式
// const img = document.createElement('img')
// img.src = Icon
// document.body.appendChild(img)

// 第二种加载svg方式