function makeIterator(array){
    var nextIndex = 0;

    return {
       next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    }
}

var it = makeIterator(['yo', 'ya']);
// console.log(it.next().value); // 'yo'
// console.log(it.next().value); // 'ya'
// console.log(it.next().done);  // true


let range = {
    from: 1,
    to: 5
};
// Мы хотим, чтобы работал for..of:
// for(let num of range) ... num=1,2,3,4,5

/*
1. Когда цикл for..of запускается, он вызывает этот метод один раз (или выдаёт ошибку, если метод не найден). Этот метод должен вернуть итератор – объект с методом next.
2. Дальше for..of работает только с этим возвращённым объектом.
3. Когда for..of хочет получить следующее значение, он вызывает метод next() этого объекта.
4. Результат вызова next() должен иметь вид {done: Boolean, value: any}, где done=true означает, что итерация закончена, в противном случае value содержит очередное значение.
*/

// 1. вызов for..of сначала вызывает эту функцию
range[Symbol.iterator] = function() {

    // ...она возвращает объект итератора:
    // 2. Далее, for..of работает только с этим итератором, запрашивая у него новые значения
    return {
        current: this.from,
        last: this.to,
  
        // 3. next() вызывается на каждой итерации цикла for..of
        next() {
        // 4. он должен вернуть значение в виде объекта {done:.., value :...}
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};
  
  // теперь работает!
for (let num of range) {
   console.log(num); // 1, затем 2, 3, 4, 5
}

// Array.from()

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};
  
let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (метод работает)

let arr = Array.from(range)
console.log('Starts from here ' + arr)



