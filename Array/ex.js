// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(arr) {
    return arr
              .split('-')
              .map(
                  (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
              )
              .join('')
}
// console.log(camelize("background-color")) // == 'backgroundColor';
// console.log(camelize("list-style-image")) // == 'listStyleImage';



// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет в нём элементы между a и b и отдаёт массив этих элементов.

function filterRange(arr, a, b) {
    let newArr = arr.filter(item => item > a && item < b);
    return newArr;
}

let arr = [5, 3, 8, 1, 2, 6];
let filtered = filterRange(arr, 1, 6);

// alert( filtered ) // 5,3,2 (совпадающие значения)
// alert( arr )


