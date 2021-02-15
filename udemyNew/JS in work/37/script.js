const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.item(0)) // first item in classes

// console.log(btns[0].classList.add('red'))
// console.log(btns[0].classList.remove('blue'))
// console.log(btns[0].classList.toggle('blue'))

// if (btns[1].classList.contains('red')) {
//     console.log('There is a red class in button');
// }

btns[0].addEventListener('click', () => {
    btns[1].classList.toggle('red')
})

wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') { // e.target.matches('button.red')
        console.log('Success');
    }
})

const btn = document.createElement('button')
btn.classList.add('red')
wrapper.append(btn)