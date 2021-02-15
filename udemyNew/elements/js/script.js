'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart');


let dynWidth = 500;

box.style.backgroundColor = 'black';
box.style.width = `${dynWidth}px`;
// box.style.cssText = `background-color: black; width: ${dynWidth}px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';


hearts.forEach(i => {
    i.style.backgroundColor = 'blue';
});

const div = document.createElement('div');

div.classList.add('black');

wrapper.append(div);
wrapper.prepend(div);

hearts[1].before(div);
hearts[2].after(div);

circles[0].remove();

hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h2>Hello</h2>';

div.insertAdjacentHTML('afterbegin', '<h3>World</h3>');

