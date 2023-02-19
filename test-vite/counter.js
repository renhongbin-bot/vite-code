import _ from 'lodash'
import lodashES from 'lodash-es'
// 假设lodash又依赖了其它模块，并且这些模块都是export导出
console.log(_)
export const count = 0