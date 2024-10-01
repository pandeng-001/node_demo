// 这是包入口文件 
const time = require("./src/dateFormat")
const html = require("./src/htmlEscape")
 
module.exports = {
    //ES6 语法   展开对象的属性
    ...time,
    ...html

}

