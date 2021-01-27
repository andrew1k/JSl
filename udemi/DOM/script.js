// class -> .CLASS_NAME
// id -> #ID
// tag -> TAG_NAME

/*
// querySelector() to id => CSS id = #id
var div = document.querySelector('#playground')

// querySelectorAll() to class => CSS class = .className
var p = document.querySelectorAll('.text')

// querySElector() to HTML element
var h1 = document.querySelector('h1')

// querySelector() to input 
var input = document.querySelector('input')

// .innerHTML
//Changes <h2> to color: red and content 
div.innerHTML = '<h2 style="color: red;">From javascript</h2>'

// .textContent
h1.textContent = 'Changed from JS'

// to log
console.log(input.value)
console.log(div.innerHTML)
console.log(p)
console.log(h1.textContent)


// Next lesson #2
let a = document.querySelector('a')
let oldHref = a.getAttribute('href')
console.log(a.getAttribute('title'));

a.setAttribute('href', 'https://ya.ru')
a.textContent = 'Yandex'


// Next lesson #3
var box1 = document.querySelector('#box1')
var box2 = document.querySelector('#box2')

box1.classList.add('red')
// box2.classList.add('blue')

// box2.classList.remove('blue')

let hasClass = box2.classList.contains('blue')

if (hasClass) {
    box2.classList.remove('blue') 
} else {
    box2.classList.add('blue')
}


// Next lesson #4



let button = document.querySelector('button')
// h1 on line 12

function butChange() {
    h1.textContent = input.value
    // h1.textContent = 'Clicked!'
}

button.addEventListener('click', butChange)

// input on line 15


// Lesson 4 part 2

//mycode 
// h1.addEventListener('mouseenter', function () {
//     this.classList.add('redtext')
// })

// h1.addEventListener('mouseleave', function () {
//     this.classList.remove('redtext')
// })


h1.addEventListener('mouseenter', function () {
    this.style.color = 'red'
    this.style.backgroundColor = 'black'
    
})

h1.addEventListener('mouseleave', function () {
    this.style.color = 'black'
    this.style.backgroundColor = 'transparent'
})

*/


// Lesson 5
/*
let divs = document.querySelectorAll('div')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', function () {
        console.log(this.getAttribute('id'));
    }// , true
    )
}
*/
// Lesson 6

var divs = document.querySelectorAll('div')
var link = document.querySelector('a')

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener('click', function(event) {
    event.stopPropagation()
    console.log(this.getAttribute('id'))
  })
}


// adding action to link "Toggle" when it clicks
link.addEventListener('click', handleLinkClick)


//function to change visibility in div
function handleLinkClick(event) {
  event.preventDefault()

  //seleccting first div
  var div = divs[0]

  //change visibility of div
  div.style.display = div.style.display === 'none'
    ? 'flex'
    : 'none'
}

// Last Lesson

document.getElementById('wrapper').addEventListener('click', function(event) {
    let tagName = event.target.tagName.toLowerCase()

    //change color lo blue in p tag
    if (tagName === 'p') {
        event.target.style.color = 'blue'
    }

    // change color to red in class="color"
    if (event.target.classList.contains('color')) {
        event.target.style.color = 'red'
    }
})