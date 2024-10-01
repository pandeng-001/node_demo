const fs = require('fs')
fs.writeFile('./files/22.txt', '这是写入的内容hello2222', 'utf8', function(err){
    if(err){
        return console.log("文件写入失败：", err.message)
    }
    // 对文件是直接覆盖  不是追加
    console.log("文件写入成功！")
})