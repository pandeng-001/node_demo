// 每个模块 都会有module 其中 module.exports = {}
// 在自定义模块中  向module.export 对象上挂载属性
module.exports.username = "ABC"

// 也可以挂载方法
module.exports.sayHello = function(){
    console.log("hello! ")
}
// 注意 exports 会更新导入的对象 以最新的为准
// 也就是 直接让module,exports = {} 等于一个对象

module.exports ={
    nickname:"CDF",
    sayhi(){
        console.log("Hi!")
    }

}

 

