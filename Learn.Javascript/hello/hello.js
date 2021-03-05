function a() {
    const n = 0 
    return function () {
        return n += 2
    }
}
const f = a()
f()
f()