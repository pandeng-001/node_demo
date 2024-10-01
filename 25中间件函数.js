// 全局中间件 是浏览器请求到达服务器后 都会触发的特殊函数
// 全局中间件 app.use() 来定义生成
// 请求处理流程  先经过中间件 在经过app.method()方法     中间件的注册在路由注册的前面
// 在中间件中 可以为req 挂载全局的属性  后续经过的中间件可以访问到这个全局的属性
// 多次使用app.use()可以 使用多个中间件

const express = require("express")

const app = express()

const mw = function(req, res, next1){     // 必须要有第三个参数    中间件 内部 必须使用第三个中间件
    console.log("定义了一个中间件")
    res.attri = "name"       // 可以为 req res 挂载属性  并且全局中间件 可用
    next1()  // 中间件 必须要有next函数
}

app.use(mw)

app.get("/user", (req, res) => {
    console.log("服务器已经获得了请求.......")
    console.log(res.attri)
    res.send("user page.")
})




app.listen(80, ()=>{
    console.log("http://127.0.0.1")
})

