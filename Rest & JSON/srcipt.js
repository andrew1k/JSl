// For Arrays
let arr = ["Julius", "Caesar", "Consul", "of the Roman Republic"]


let [fName, sName] = arr;
console.log(fName); // Julius
console.log(arr); // arr: ["Julius", "Caesar", "Consul", "of the Roman Republic"]


let [, , title] = arr
console.log(title); // Consul


let [a, b, c] = 'abc'


let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"]

console.log(name1 + ' ' + rest); // Julius Consul,of the Roman Republic



// For Objects

let options = {
    title1: "Menu",
    width1: 100,
    height1: 200
};

let {title1, width1, heigth1} = options;

console.log(title1) // Menu


// function
// function sum(...arr) {
//     let sum = 0
//     for (let i in arr) {
//         sum += i
//     }
//     return sum
// }
// console.log(sum(1,4,7,3,15))



// JSON


let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
  };
  
  let json = JSON.stringify(student);
  
  console.log(typeof json); // мы получили строку!
  
  console.log(json);
  /* выведет объект в формате JSON:
  {
    "name": "John",
    "age": 30,
    "isAdmin": false,
    "courses": ["html", "css", "js"],
    "wife": null
  }
  */

  // JSON не работает с сылками
  let room = {
    number: 23
  };
  
  let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup ссылается на room
  };
  
  room.occupiedBy = meetup; // room ссылается на meetup
  
  alert( JSON.stringify(meetup, ['title', 'participants']) );
  // {"title":"Conference","participants":[{},{}]}


  let room1 = {
    number: 23
  };
  
  let meetup1 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room1
  };
  
  alert( JSON.stringify(meetup) );
  /*
    {
      "title":"Conference",
      "date":"2017-01-01T00:00:00.000Z",  // (1)
      "room": {"number":23}               // (2)
    }
  */



  // JSON.parse 
  
  let json = {}/*{
    name: "John",                     // Ошибка: имя свойства без кавычек
    "surname": 'Smith',               // Ошибка: одинарные кавычки в значении (должны быть двойными)
    'isAdmin': false                  // Ошибка: одинарные кавычки в ключе (должны быть двойными)
    "birthday": new Date(2000, 2, 3), // Ошибка: не допускается конструктор "new", только значения.
    "friends": [0,1,2,3]                     // Здесь всё в порядке
  }; */