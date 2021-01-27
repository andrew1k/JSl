/* 
    ARRAY
*/

let cars = ['Ford' , 'Mazda', 'Kia', 'BMW']
console.log(cars)
console.log(cars[2])

console.log(cars.length)

// Adds to the end
cars.push('Audi')
console.log(cars)

// deletes and returns last element of array
let audi = cars.pop()
console.log(cars, audi)

// deletes and returns first element of array 
var ford = cars.shift()
console.log(cars, ford)

// ads to the beginning
cars.unshift(audi)
console.log(cars)




/* 
    OBJECTS
*/

const person = {
    name: 'Me',
    year: 1995,
    family: ['Sis', 'Bro'],
    car: {
        year: 2010, 
        model: 'Ford'
    },
    calcAge: function() {
        let curYear = 2020
        this.age = curYear - this.year // person.year
        console.log(this.age)
    }
}

console.log(person)
console.log(person.name)
console.log(person['year'])
var field = 'car'
console.log(person[field].year)

person.year = 1996

console.log(person)

person.calcAge() 