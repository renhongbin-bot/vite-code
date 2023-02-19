module.exports = function (aliasConf, JSContent) {
  const entires = Object.entries(aliasConf);
  let lastContent = JSContent
  entires.forEach((entire) => {
    const [alia, path] = entire;
    const srcIndex = path.indexOf('/src')
    const realPath = path.slice(srcIndex, path.length)
    lastContent = JSContent.replace(alia, realPath)
  });
  console.log('lastcontent....', lastContent)
  return JSContent;
};
