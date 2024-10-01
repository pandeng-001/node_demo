// 导入模块

const Time = require('./18dataFormat')
const time = new Date
console.log(time)
console.log("-----------")
const time1 = Time.dateFormat(time)
console.log(time1)

// 使用第三方 包
const moment = require("monment")
console.log(moment.format("YYYY-MM-DD HH:mm:ss"))