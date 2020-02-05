export function utcTimeToCetConvert() {
    const time = new Date()
    time.setUTCHours(time.getUTCHours() + 1)
    return time
        .toUTCString()
        .split(' ')
        .slice(0, 5)
        .join(' ')
        .toString()
}
