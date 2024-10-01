// 导入fs模块  
const fs = require('fs')
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr){
	// 如果读取成功，则err是null， dataStr是文件内容
	// 如果读取失败 则err是错误对象， dataStr是undefined
	console.log(err)
	console.log('------')
	console.log(dataStr)

})