// Шпаргалка по методам массива:

//     Для добавления/удаления элементов:
//         push (...items) – добавляет элементы в конец,
//         pop() – извлекает элемент с конца,
//         shift() – извлекает элемент с начала,
//         unshift(...items) – добавляет элементы в начало.
//         splice(pos, deleteCount, ...items) – начиная с индекса pos, удаляет deleteCount элементов и вставляет items.
//         slice(start, end) – создаёт новый массив, копируя в него элементы с позиции start до end (не включая end).
//         concat(...items) – возвращает новый массив: копирует все члены текущего массива и добавляет к нему items. Если какой-то из items является массивом, тогда берутся его элементы.

//     Для поиска среди элементов:
//         indexOf/lastIndexOf(item, pos) – ищет item, начиная с позиции pos, и возвращает его индекс или -1, если ничего не найдено.
//         includes(value) – возвращает true, если в массиве имеется элемент value, в противном случае false.
//         find/filter(func) – фильтрует элементы через функцию и отдаёт первое/все значения, при прохождении которых через функцию возвращается true.
//         findIndex похож на find, но возвращает индекс вместо значения.

//     Для перебора элементов:
//         forEach(func) – вызывает func для каждого элемента. Ничего не возвращает.

//     Для преобразования массива:
//         map(func) – создаёт новый массив из результатов вызова func для каждого элемента.
//         sort(func) – сортирует массив «на месте», а потом возвращает его.
//         reverse() – «на месте» меняет порядок следования элементов на противоположный и возвращает изменённый массив.
//         split/join – преобразует строку в массив и обратно.
//         reduce(func, initial) – вычисляет одно значение на основе всего массива, вызывая func для каждого элемента и передавая промежуточный результат между вызовами.


let fruits = ["Яблоко", "Апельсин", "Груша"];
// Pop
fruits.pop(); // удаляем "Груша" и выводим его
// Push
fruits.push("Груша"); // Яблоко, Апельсин, Груша
// Shift
fruits.shift(); // удаляем Яблоко и выводим его
// Unshift
fruits.unshift('Яблоко');



// Loops
let arr = ["Яблоко", "Апельсин", "Груша"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}

for (let fruit of fruits) {
  console.log( fruit );
}



// Matrix
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log( matrix[1][1] ); // 5, центральный элемент






/* 
    arr.splice(index[, deleteCount, elem1, ..., elemN])
*/

let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];

// удалить 3 первых элемента и заменить их другими
arr.splice(0, 3, "Давай", "танцевать");

console.log( arr ) // теперь ["Давай", "танцевать", "прямо", "сейчас"]

let removed = arr.splice(0, 2);

console.log( removed ); // "Давай", "Танцевать"




// SPLICE

let arr1 = ["Я", "изучаю", "JavaScript"];

// с позиции 2
// удалить 0 элементов
// вставить "сложный", "язык"
arr1.splice(2, 0, "сложный", "язык");

console.log( arr1 ); // "Я", "изучаю", "сложный", "язык", "JavaScript"




// SLICE 

let arr2 = ["t", "e", "s", "t"];

console.log( arr2.slice(1, 3) ); // e,s (копирует с 1 до 3)

console.log( arr2.slice(-2) ); // s,t (копирует с -2 до конца)




// arr.forEach(function(item, index, array) {}

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    console.log(`${item} имеет позицию ${index} в ${array}`);
  });




  // FIND

  let result = arr4.find(function(item, index, array) {
    // если true - возвращается текущий элемент и перебор прерывается
    // если все итерации оказались ложными, возвращается undefined
  });

  //Example
  let users = [
    {id: 1, name: "Вася"},
    {id: 2, name: "Петя"},
    {id: 3, name: "Маша"}
  ];
  
  let user = users.find(item => item.id == 1);
  
  console.log(user.name); // Вася



// FILTER

let results = arr5.filter(function(item, index, array) {
  // если true - элемент добавляется к результату, и перебор продолжается
  // возвращается пустой массив в случае, если ничего не найдено
});


// возвращает массив, состоящий из двух первых пользователей
let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2




// MAP 

let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6
