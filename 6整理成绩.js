// 1.导入fs模块
const fs = require('fs')

// 2.调用fs.readFile() 读取文件
fs.readFile("./files/成绩.txt", 'utf8', function(err, dataStr){
    // 3.判断文件是否读取成功
    if(err){
        return console.log("文件读取失败 ", err.message)
    }
    // console.log("文件读取成功！", dataStr)

    //4.1 先把成绩的数据 按照空格进行分割
    const arrOld = dataStr.split(" ")
    console.log(arrOld) // 分隔开的字符串变成了列表
    //4.2 循环分割数组，对每一项数据进行字符串的替换操作
    const arrNew = []
    arrOld.forEach(item =>{
        arrNew.push(item.replace('=', "："))
    } )
    console.log(arrNew)
    //4.3 把新数组的每一项 进行合并 得到一个新的字符串
    const newStr = arrNew.join("\r\n") // windows电脑中 \r\n表示换行
    console.log(newStr)
    //5. 将新的到的字符串保存到txt文件中
    fs.writeFile("./files/成绩-ok.txt", newStr, function(err){
        if(err){
            return console.log("文件写入失败 ", err.message)
        }
        console.log("成绩已经处理完成，并且让写入到新的文件当中！")
    })



})