// vite插件必须返回vite一个配置对象
const fs = require('fs')
const path = require('path')

function diffDirAndFile(dirFilesArr = [], basePath = "") {
  const result = {
    dirs: [],
    files: []
  }
  dirFilesArr.forEach(name => {
    const currentFileStat = fs.statSync(path.resolve(__dirname, basePath + '/' + name));
    const isDirectory = currentFileStat.isDirectory();
    if(isDirectory) {
      result.dirs.push(name);
    } else {
      result.files.push(name)
    }
  })
  return result
}

function getTotalSrDir(keyName) {
  const result = fs.readdirSync(path.resolve(__dirname, '../src'));
  const diffResult = diffDirAndFile(result, '../src')
  const resolveAliasesObj = {} //存放别名配置
  diffResult.dirs.forEach(dirName => {
    const key = `${keyName}${dirName}`
    const aPath = path.resolve(__dirname, '../src' + '/' + dirName)
    resolveAliasesObj[key] = aPath
  })
  const basePath = path.resolve(__dirname, '../src')
  // 配置@
  resolveAliasesObj['@'] = basePath
  return resolveAliasesObj;
}
module.exports = ({keyName = "@"} = {}) => {
  return {
    config: (config, env) => {
      // config: 目前的配置对象
      // config函数可以返回一个对象，这个对象是部分的viteconfig配置【其实就是想改的那部分】
      const resolveAliases = getTotalSrDir(keyName);
      return {
        // 返回resolve返回,将src下的所有文件夹进行别名控制
        // 读目录
        resolve: {
          alias: resolveAliases
        }
      }
    }
  }
}