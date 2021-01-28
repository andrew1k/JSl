"use strict";

let name = "John";
let admin = name;

// alert(admin);


function ucFirst(str) {
    let a = str.slice(0,1)
    let b = str.slice(1)
    a = a.toUpperCase()
    return a + b;
}

console.log(ucFirst('andrew'))
console.log(ucFirst('meg'))


function checkSpam(a) {
    let spam = 'This is a spam'
    let notSpam = 'It isn\'t a spam'
    let toLow = a.toLowerCase();
    if (toLow.includes('viagra') || toLow.includes('xxx')) {
        return spam;
    } else {
        return notSpam;
    }
}



console.log(checkSpam('buy ViAgRA now'))
console.log(checkSpam('free xxxxx')) 
console.log(checkSpam("innocent rabbit")) 