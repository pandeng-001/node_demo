// path 路径拼接
const path =  require('path')
// ../ 表示上一层路径  抵消一层路径
const pathStr = path.join("a/", "b/c/", "../", "./", "e")
console.log(pathStr)
const pathStr2 = path.join(__dirname, "/files/11.txt")
console.log(pathStr2)
