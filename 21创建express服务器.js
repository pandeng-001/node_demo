// 使用express 第三方包 创建服务器
// 1. 导入
const express = require("express")

// 2. 创建web服务器
const app = express()

// 2.1 监听 浏览器发来的请求 
app.get('/', (req, res) => {
    console.log(req.query) // query 可以用来查询 请求的参数
    res.send(req.query)   // 将参数发送给 浏览器
})

// 2.2 
app.post("/", (req,res) =>{
    console.log(req.query)  // 当没有请求参数  query是一个空对象
    res.send(req.query)

}) 

// 2.3 动态匹配参数查询   id 是一个动态的参数
app.get("/user/:id", (req,res) =>{
    console.log(req.params)   // req.params 可以动态匹配到 请求参数
    res.send(req.params)

}) 


// 3. 启动web服务器
app.listen(80, () => {
    console.log('express is running at http://127.0.0.1')

})




