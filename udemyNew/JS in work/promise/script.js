'use strict'

console.log('Data request...')

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Data loading...')

        const product = {
            name: 'TV',
            price: 2000
        }

        resolve(product)
    }, 2000);
})

req.then((product) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            product.status = 'order'
            res(product)
        }, 2000);
    }).then(data => {
        data.modify = true
        return data
        // console.log(data)
    }).then((data) => {
        console.log(data);
    })
}).finally(() => {
    console.log('Finnaly');
})


const test = time => {
    return new Promise(res => {
        setTimeout(() => {
            res()
        }, time);
    })
}

// test(1000).then(() => console.log('1000 ms'))


Promise.all([test(1000), test(2000)]).then(() => {
    console.log('Success');
})

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Success in race');
})

// JSON Placeholder

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then(response => response.json())
    .then(json => console.log(json))


    