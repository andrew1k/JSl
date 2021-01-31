// Rest parameters and spread syntax

// sum with rest arr
function sumAll(...args) { // args — имя массива
    let sum = 0;
  
    for (let arg of args) sum += arg;
  
    return sum;
  }
  
console.log( sumAll(1) ); // 1
console.log( sumAll(1, 2) ); // 3
console.log( sumAll(1, 2, 3) ); // 6




// We can even combine the spread syntax with normal values
let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log( Math.max(1, ...arr1, 2, ...arr2, 25) ); // 25




// функция-конструктор возвращает новый объект
function User(name) {

  // методом объекта становится вложенная функция
  this.sayHi = function() {
    alert(name);
  };
}

let user = new User("John");
user.sayHi(); // у кода метода "sayHi" есть доступ к внешней переменной "name"






// IIFE
(function() {

  let message = "Hello";

  alert(message); // Hello

})();






// Global object
window.console.log("Привет"); // window for browser mode // globalThis for else 
// В браузере глобальные функции и переменные, объявленные с помощью var (не let/const!), становятся свойствами глобального объекта

if (!window.Promise) {
  alert("Ваш браузер очень старый!");
}   // собственная реализация современной возможности языка






// let func = new Function ([arg1, arg2, ...argN], functionBody);
let str // ... код, полученный с сервера динамически ...

let func = new Function(str);
func();


new Function('a', 'b', 'return a + b'); // стандартный синтаксис
new Function('a,b', 'return a + b'); // через запятую в одной строке
new Function('a , b', 'return a + b'); // через запятую с пробелами в одной строке






// setTimeout & setInterval
// let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)

// EX 
function sayHi(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHi, 1000, "Привет", "Джон"); // Привет, Джон



// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

// EX
// повторить с интервалом 2 секунды
let timerId = setInterval(() => alert('tick'), 2000);

// остановить вывод через 5 секунд
setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000);






