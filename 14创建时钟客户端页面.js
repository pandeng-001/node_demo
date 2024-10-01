const http = require("http")
const fs = require("fs")
const path = require("path")

const sever = http.createServer()

sever.on("request",(req, res)=>{
    // 1. 获取到访问的 urL
    const url = req.url
    // 设置默认返回内容
    let content = '<h1>404 Not Found</h1>'
    let fpath = ""
    // 2. 对url 进行拼接和判断处理
    if(url === "/"){
        fpath = path.join(__dirname, "/files/index_html.html")
    }else{
        fpath = path.join(__dirname, '/files', url)
    }
    fs.readFile(fpath, "utf-8", function(err, dataStr){
        if(err) return console.log("文件读取失败", err.message)
        // 3. 读取成功  返回到客户端
        res.end(dataStr)
    })
})

sever.listen(80, ()=>{
    console.log("服务器证运行在http://127.0.0.1")
})


