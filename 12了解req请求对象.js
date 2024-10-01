// 1. 导入
const http = require("http")
// 2. 创建
const sever = http.createServer()
// 3. 监听
sever.on("request", (req, res)=>{
    // req包含了请求端的方法属性
    const url = req.url
    const method = req.method
    const str = `you visit url is ${url}, method is ${method}`
    const str2 = `您正在访问的URL是${url}，请求方法是 ${method}`
    // res.setHeader() 解决中文乱码问题
    res.setHeader("Content-Type", "text/html; charset=utf-8") 
    // res表示服务器将内容返回给请求端 
    res.end(str2)
    console.log("有人正在访问服务器")

})

// 4. 启动
sever.listen(80, ()=>{
    console.log("服务器正在运行中...")
})
