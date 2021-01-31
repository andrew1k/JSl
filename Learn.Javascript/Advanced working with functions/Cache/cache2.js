let worker = {
    method() {
        return 1;
    },

    slow(x) {
        console.log('Called with ' + x);
        return x * this.method()
    }
}

function chachingDecorator(func) {
    let cache = Map()
    return function (x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        
        let result = func.call(this, x) // this передается правильно благодаря call
        cache.set(x, result)
        return result
    }
}


worker.slow = chachingDecorator(worker.slow)



console.log( worker.slow(2) ); // работает
console.log( worker.slow(2) ); // работает, не вызывая первоначальную функцию (кешируется)