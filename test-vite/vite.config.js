import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'
// 策略模式
const envResolver = {
    "build": () => {
        console.log('生产环境')
        return { ...viteBaseConfig, ...viteProdConfig }
    },
    "serve": () => {
        console.log('开发环境')
        return { ...viteBaseConfig, ...viteDevConfig } //新配置里可能会被配置envDir， envA
    }
}
export default defineConfig(({command, mode}) => {
    // command 的参数是build还是serve取决于我们的命令是开发环境还是生产环境
    // console.log("process", process.env)
    // 当前env文件所在位置
    // 第二个参数不是必须用process.cwd,如果使用process.cwd，必须保证vite.config.js的目录在项目根目录
    const env = loadEnv(mode, process.cwd(), '')
    // console.log('env', env)
    return envResolver[command]()
})