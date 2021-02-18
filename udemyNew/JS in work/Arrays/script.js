'use strict'


// filter
const names = ['Harry', 'Hermione', 'Ron', 'Voldemort']

const shortNames = names.filter((name) => {
    return name.length <= 5
})
console.log(shortNames)


// map
let answers = ['Harry Potter', 'Hermione Granger', 'Ron Weasley', 'Tom Riddle']

const result = answers.map(item => item.toLowerCase())
console.log(result)


// every/some
const some = [4, 'string', true, 'AFDA']
console.log(some.some(i => typeof(i) === 'number')) // если хотя бы один равен числу = true
console.log(some.every(i => typeof(i) === 'number')) // усли все равны числу = 



// reduce
const num = [4, 2, 5, 1, 6, 3]
const result = num.reduce((sum, current) => sum + current)
console.log(result)

const fruits = ['apple', 'pear', 'plum']
const stringFruits = fruits.reduce((s, c) => `${s}, ${c}`)
console.log(stringFruits)


// practice
// const obj = {
//     harry: 'persone',
//     ron: 'persone',
//     scabbers: 'animal',
//     hedwig: 'animal'
// }
