function _addZeros(value) {
    return value < 10 ? ('0' + value) : value;
}

export function formatDateTime(timer) {
    const date = new Date(timer)

    const y = date.getFullYear(),
        m = date.getMonth() + 1,
        d = date.getDate(),
        h = _addZeros(date.getHours()),
        i = _addZeros(date.getMinutes()),
        s = _addZeros(date.getSeconds())

    return `${y}年${m}月${d}日 ${h}:${i}:${s}`
}