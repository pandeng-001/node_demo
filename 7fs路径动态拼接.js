 //  1.可以使用完成路径 来进行 读取文件
//   2. 完成路径 一致性非常差  不利于后期维护 
//   2.1 使用内置提供的 __dirname 表示本文件所处的目录
const fs = require("fs")
fs.readFile(__dirname+"/files/11.txt", "utf8", function(err, dataStr){
    if(err){
        return console.log('文件读取失败：', err.message)
    }
    console.log("文件内容是：", dataStr)
})