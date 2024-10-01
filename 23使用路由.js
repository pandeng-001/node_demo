const express = require("express")
const router = require("./24router_set")

const app = express()

// 使用路由模块
app.use(router)




// app.use()方
// 注册全局中间件
//参数1 "路由前缀" 参数2  中间件 router或者express.static("路径")

app.listen(80, ()=>{
    console.log("running at http://127.0.0.1")
})



