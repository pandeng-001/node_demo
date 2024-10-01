// 通过判断err的值是否为null  来判断
const fs = require("fs")
fs.readFile("./files/112.txt", "utf8", function(err, dataStr){
    if(err){
        return console.log('文件读取失败：', err.message)
    }
    console.log("文件内容是：", dataStr)
})
