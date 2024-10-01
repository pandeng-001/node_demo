// 自定义路由模块
// 1. 导入
const express = require("express")
// 2. 创建 router 
const router = express.Router()

// 3. 挂载路由
router.get("/user/li", (req, res)=>{
    res.send("/user/li is finding")
})


router.post("user/zi",(req,res)=>{
    res.send("user/zi is finding")

})



module.exports = router

