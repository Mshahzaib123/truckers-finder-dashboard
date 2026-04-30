export const serialize = (obj: Record<string, string>) => {
    let arr = []
    for (let p in obj)
        if (obj.hasOwnProperty(p)) {
            arr.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
        }
    return arr.join('&')
}

export const isEmpty = (obj: object) => {
    return (
        !obj || (obj.constructor === Object && Object.entries(obj).length === 0)
    )
}
