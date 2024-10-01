const fs = require('fs')
// 参数1 表示存放的文件路径  必选参数
// 参数2 要写入的内容 必选参数
// 参数3 文件格式 可选参数 默认utf8
// 参数4 写入成功的回调函数
fs.writeFile('./files/22.txt', '这是写入的内容hello', 'utf8', function(err){
    // 没有文件 则创建
    // 如果文件写入失败 err的值为错误对象
    // 如果写入成功 err的值为null
    console.log(err)
})