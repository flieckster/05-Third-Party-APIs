var d = new Date(),
    h = d.getHours(),
    m = 15 * Math.floor(d.getMinutes()/15),
    stamp = h + ":" + (m === 0 ? "00" : m);
console.log(stamp);