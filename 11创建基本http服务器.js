// 1. 导入http
const http = require("http")
// 2. 创建web服务器实例
const sever = http.createServer()
// 3. 为服务器绑定request事件 监听客户端的请求
sever.on('request', function(req, res){
    console.log("someoe visit our web sever")
})
// 4. 启动服务器
sever.listen(80, function(){
    console.log('server running at http://127.0.0.1:80')
})
