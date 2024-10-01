 const http = require("http")
 const sever = http.createServer()
 sever.on("request", (req, res)=>{
    // 1 获取请求的url地址
    const url = req.url
    // 2 设置默认响应的内容 404
    let content = '<h1>404 not found</h1>'
    // 3 判断 用户的请求url
    if(url === "/" || url ==='/index.html'){
        content = '<h1>首页</h1>'
    }else if(url === '/about.html'){
        content = '<h1>关于页面</h1>'
    }
    // 4 设置Content-Type  防止乱码
    res.setHeader('Content-Type', "text/html; charset=utf-8")
    // 5 返回客户端
    res.end(content)
 })
 sever.listen(80, ()=>{
    console.log("服务器正在运行在http://127.0.0.1")
 })