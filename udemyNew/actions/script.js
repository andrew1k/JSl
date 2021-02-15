'use strict'

const btn = document.querySelector('#btn'),
      btns = document.querySelectorAll('button')


btn.addEventListener('mouseenter', e => {
    console.log(e);
    e.target.style.backgroundColor = `black`
})
btn.addEventListener('mouseleave', e => {
    e.target.style.backgroundColor = 'green'
}) // removeEventListner ('mouseenter', same function)


const link = document.querySelector('a')

btns.forEach(bt => {
    bt.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = 'black'
    })
    bt.addEventListener('mouseleave', e => {
        e.target.style.backgroundColor = 'green'
    })
})

link.addEventListener('click', e => {
    e.preventDefault()
    console.log(e.target);
})