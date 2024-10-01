const path = require("path")

// 获取文件名字
const fpath = '/a/b/c/index.html'
const fname = path.basename(fpath)
console.log(fname)

const fname2 = path.basename(fpath, ".html")
console.log(fname2)

const ename = path.extname(fpath)
console.log(ename)