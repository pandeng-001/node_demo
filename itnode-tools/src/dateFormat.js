function dateFormat(dateStr){
    const dt = new Date(dateStr)

    const y = dt.getFullYear()
    const m = padZero(dt.getMonth() + 1)
    const d = padZero(dt.getDate())

    const hh = padZero(dt.getHours())
    const mm = padZero(dt.getMinutes())
    const ss = padZero(dt.getSeconds())

    return `${y}-${m}-${d}  ${hh}:${mm}:${ss}`

}

// 单个字符串也可以比较大小
function padZero(n){
    // n是字符串
    return n>'9'? n: "0"+n

}

module.exports = {
    dateFormat
}