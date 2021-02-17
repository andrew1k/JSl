'use strict'

function User(name, id) {
    this.name = name
    this.id = id
    this.human = true
    this.hello = function () {
        console.log(`Hello ${this.name}, your id is ${this.id}`)
    }
}

User.prototype.exit = function () {
    console.log(`Exit from ${this.name} profile`)
}



const meg = new User('Meg', 4321)
const alex = new User('Alex', 3321)

console.log(meg)
console.log(alex)

meg.hello()
meg.exit()



// this

// 1 function: this == Window, or if use strict this == undefined
// 2 in method of Object returns 'this' object
// 3 'this' in constructor & classes links to object
// manual add this to function

function showThis(a, b) {
    console.log(this); //undefined
    function sum() {
        console.log(this); // undefined 
        return a + b // mistake: this.a + this.b
    }
}

showThis(4, 5)

// Object
const obj = {
    a: 20,
    b: 15,
    sum() {
        console.log(this); // // {a: 20, b: 15, sum: f}
        function shout() {
            console.log(this); //undefined  
        }
        shout()
    }
}

obj.sum



// 4 
function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Meg'
}

sayName.call(user, 'Meggman')
sayName.apply(user, ['Meggman']) // { name: 'Meg' } Meg



// bind()
function count(num) {
    return this * num
}

// создает новую функцию и в this передает 2
const double = count.bind(2)
console.log(double(3))





// Class

class Rectangle {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    culcArea() {
        return this.height * this.width
    }
}

const squere = new Rectangle(5, 5)
const long = new Rectangle(10, 2)

console.log(squere.culcArea()) // 25
console.log(long.culcArea()) // 20

class ColoredRectangleWithText extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width)
        this.text = text
        this.bgColor = bgColor
    }

    showMyProps() {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText (25, 10, `text`, 'Red')

div.showMyProps() // Text: text, color: Red
console.log(div.culcArea()); // 250