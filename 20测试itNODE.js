const TIME = require("./itnode-tools")

const time = TIME.dateFormat(new Date())

console.log(time)
const html = '<h1 style="ABC">hello world<span>&nbsp;</span></h1>'
console.log(html)
const str = TIME.htmlEscape(html)
console.log(str)
const html2 = TIME.htmlUnEscape(str)
console.log(html2)
console.log(html===html2)


