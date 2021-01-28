// 1 миллиард, буквально: 1 и 9 нулей
let billion = 1000000000 
let billionInE = 1e9

console.log(7.3e9) // 7.3 миллиардов (7,300,000,000)

console.log(1.23e6 === 1.23 * 1000000)



let ms = 0.000001
let msInE = 1e-6 // шесть нулей, слева от 1

console.log(msInE == ms)



console.log(0xff)  // 255 в 16-ричной системе (регистр не имеет значения)

let a = 0b11111111; // бинарная форма записи числа 255
let b = 0o377; // восьмеричная форма записи числа 255

console.log( a == b ); // true, с двух сторон число 255




// Метод num.toString(base) возвращает строковое представление числа num в системе счисления base.
let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111




/* 
        Округление
*/

// Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
Math.floor


// Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
Math.ceil


// Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
Math.round


// Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1
Math.trunc



// Метод toFixed(n) округляет число до n знаков после запятой и возвращает строковое представление результата.
let num = 12.36;
alert( num.toFixed(1) ); // "12.4"
// Обратите внимание, что результатом toFixed является строка. Если десятичная часть короче, чем необходима, будут добавлены нули в конец строки:
// Мы можем преобразовать полученное значение в число, используя унарный оператор + или Number(), пример с унарным оператором: +num.toFixed(5).




/* 
        Неточные вычисления
*/

console.log( 0.1 + 0.2 == 0.3 ); // false
console.log( 0.1 + 0.2 ); // 0.30000000000000004

let sum = 0.1 + 0.2;
console.log( +sum.toFixed(2) ); // 0.3



/* 
        Проверка: isFinite и isNaN
*/

console.log( isNaN(NaN) ); // true
console.log( isNaN("str") ); // true


console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false, потому что специальное значение: NaN
console.log( isFinite(Infinity) ); // false, потому что специальное значение: Infinity]




/* 
        parseInt и parseFloat
*/

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке


console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255, без 0x тоже работает



// Math => https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log( Math.random() ); // 0.1234567894322
console.log( Math.max(3, 5, -10, 0, 1) ); // 5
console.log( Math.min(1, 2) ); // 1    
console.log( Math.pow(2, 10) ); // 2 в степени 10 = 1024


