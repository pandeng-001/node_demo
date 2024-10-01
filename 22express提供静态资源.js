const express = require("express")

const app  = express()

// express.static()  提供托管静态资源  浏览器可以直接访问该文件下的所有资源
// 并且可以 托管多个文件资源 根据导入的先后顺序 进行加载访问
// 也可以对托管的静态资源 前面添加一个路径 
app.use("/static22", express.static("./files/static2"))
app.use(express.static("./files/static"))


app.listen(80, ()=>{
    console.log("express is running at http://127.0.0.1")
})