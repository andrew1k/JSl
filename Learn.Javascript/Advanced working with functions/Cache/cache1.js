function big(x) {
    // big func
    console.log('return it ' + x);
}

function cachingDecorator(func) {
    let cache = new Map()

    return function (x) {
        if (cache.has(x)) { // если в кэше есть, то вернуть его
            return cache.get(x)
        }

        let result = func(x) // если нет в кэше, то вернуть функцию

        cache.set(x, result) // и после кэшируем
        return result
    }
}


slow = cachingDecorator(slow)

alert( slow(1) ); // slow(1) кешируем
alert( "Again: " + slow(1) ); // возвращаем из кеша