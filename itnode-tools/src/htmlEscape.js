

// 将字符串进行转义
function htmlEscape(htmlStr){
    return htmlStr.replace(/<|>|"|&/g, (match) =>{
        switch(match){
            case "<":
                return "&lt;"
            case ">":
                return "&gt;"
            case '"':
                return "&quot;"
            case "&":
                return "&amp;"
        }
    })

}


// 将转移字符还原回来
function htmlUnEscape(str){
    return str.replace(/&lt;|&gt;|&quot;|&amp;/g, (match) => {
        switch(match){
            case "&lt;":
                return "<"
            case "&gt;":
                return ">"
            case '&quot;':
                return '"'
            case "&amp;":
                return "&"
            }
        })
}

module.exports = {
    htmlEscape,
    htmlUnEscape
}

