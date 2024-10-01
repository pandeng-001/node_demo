// 1.1 导入 fs模块
const fs = require("fs")
// 1.2 导入path模块
const path = require("path")

// 1.3定义正则表达式 分别匹配 <style></style> <script></script> 标签

// \s 表示空白字符  \S 表示非空白字符（任意字符） *表示匹配任意次
//  '//' 表示正则表达式的内容
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

// 2.1 调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, "/files/index.html"), "utf8", function(err, dataStr){
    if(err){
        return console.log("读取inde文件失败", err.message)
    }
    resolveCSS(dataStr)
    resolveJS(dataStr)
    resolveHTML(dataStr)

})

// 3.1 分割出来css样式方法
function resolveCSS(htmlStr){
    // 3.2 使用正则提取所需要的内容
    const r1 = regStyle.exec(htmlStr)
    // 3.3 将提取出来的样式 进行替换
    const newCSS = r1[0].replace("<style>", "").replace("</style>", "")
    // console.log(newCSS)
    // 3.4 将获得新字符传 写入文件
    fs.writeFile(path.join(__dirname ,"/files/index_css.css"), newCSS, function(err){
        if(err){
            return console.log("CSS样式写入失败", err.message)
        }
        console.log("CSS写入成功")
    })
}

// 4.1 分割 script出来
 function resolveJS(htmlStr){
    // 4.2 使用正则将script 分离出来
    const r2 = regScript.exec(htmlStr)
    // 4.3 将分割出来的字符串进行 空字符串替换
    const newJS = r2[0].replace("<script>", "").replace("</script>", "")
    // 4.4 将获取的新字符串 写入到文件中
    fs.writeFile(path.join(__dirname, "./files/index_js.js"), newJS, function(err){
        if(err)  return console.log("JS文件写入失败", err.message)
        console.log('JS文件写入成功')
    })

 }


 // 5.1 单独的html 引入CSS JS
 function resolveHTML(htmlStr){
    // 5.2使用正则 替换JS 和CSS标签
    const newHTML = htmlStr.replace(regStyle, "<link rel='stylesheet' href='./index_css.css'>").replace(regScript, "<script src='./index_js.js'></script>")
    // 5.3 将获取的新字符串写入到文件 
    fs.writeFile(path.join(__dirname, "./files/index_html.html"), newHTML, function(err){
        if(err) return console.log("HTML文件写入失败", err.message)
        console.log('HTML文件写入成功')
    })
 
 }





