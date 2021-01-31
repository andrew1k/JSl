let worker = {
    big (min, max) {
        console.log(`this call with ${min} and ${max}`);
        return min + max
    }
}

function cachingDecorator(func) {
    let cache = Map()
    return function () {
        let key = hash(args)
        if (cash.has(key)) {
            return cache.get(key)
        }

        let result = func.call(this, ...args)

        cache.set(ket, result)
        return result
    }
}