// Lesson 2

// alert()
document.getElementById('alert').addEventListener('click', function() {
    alert('You just clicked') 
})

// confirm()
document.getElementById('confirm').addEventListener('click', function() {
    let des = confirm('Are you 18?')
    if (des) {
        alert('All Rigth')
    } else {
        alert('Get out')
    }
})

// prompt()
document.getElementById('prompt').addEventListener('click', function() {
    let q = prompt('How old are You?')
    if (q >= 18) {
        alert('You can go')
    } else {
        alert('Get out')
    }
})


//console
console.log('Any')
console.warn('Alert')
console.info('Info')
console.error('Error')




// Lesson 3 - Arrays

let str = '1,2,3,4,5,6,7,8,9'
let arr = str.split(',')

console.log(arr);

// console.log(arr.join(';'));
// console.log(arr.reverse());

// first is index of array, second how many indexes delete from first call,
// third etc. replaces and adds new elements
arr.splice(1, 1, '22')
console.log(arr) //  [ "1", "22", "3", "4", "5", "6", "7", "8", "9" ]

arr.splice(2, 0, '33') 
console.log(arr); //[ "1", "22", "33", "3", "4", "5", "6", "7", "8", "9" ]


// Array.find()
let objArr = [
    {name: 'Max', age: 27}, 
    {name: 'Sara', age: 18}, 
    {name: 'Meg', age: 20}
]

let foundPerson = objArr.find(function(person) {
    return person.age === 20
})

console.log(foundPerson);

// Array.filter()

let oddNum = [1,2,3,4,5,6,7,8,9,10].filter(function(i) {
    return i % 2 !== 0
})

console.log(oddNum)

// Array.map()
let numArr = arr.map(function(i) {
    return parseInt(i)
})

console.log(mergeSort(numArr));

// creating mergeSort
function mergeSort(arr) {
    if (arr.length === 1) {
        return arr
    }

    let n = Math.floor(arr.length / 2)

    let L = mergeSort(arr.slice(0, n))
    let R = mergeSort(arr.slice(n, arr.length))

    return _mergeSort(L, R) 
}
function _mergeSort(a, b) {
    let c = []

    while (a.length && b.length) {
        c.push(a[0] > b[0] ? b.shift() : a.shift())
    }

    while (a.length) {
        c.push(a.shift())
    }

    while (b.length) {
        c.push(b.shift())
    }

    return c
}



// Lesson before last JSON
// Creating Object to string
let perSon = {
    name: 'Meg',
    age: 22, 
    car: {
        model: 'Tesla',
        year: 2020
    },
    job: 'FullStack JS',
    friends: ['Max', 'Sara'],
}

// JSON.stringify to change obj to str
let strPerSon = JSON.stringify(perSon)

console.log(strPerSon);

// JSON.parse to change back str to obj
let backObj = JSON.parse(strPerSon)
console.log(backObj);



// Last Lesson

// Button with id #save will saves any string from input to localStorage
document.querySelector('#save').addEventListener('click', function (event) {
    // creating value from input
    var valueSt = document.querySelector('input').value

    let obj = {
        text: valueSt,
    }
    // Save it to storage with 'HeaderText' item
    localStorage.setItem('HeaderText', JSON.stringify(obj))
})



document.addEventListener('DOMContentLoaded', function () {
    // get saved item from localStorage to text variable
    var text = localStorage.getItem('HeaderText')

    var obj = {}
    
    try{
        obj = JSON.parse(localStorage.getItem('HeaderText'))
    } catch (e) {}

    // text.trim() removes any spaces if there is no text and returns text by default
    if (obj && obj.text && obj.text.trim()) {
        document.querySelector('h2').textContent = text
    }
})