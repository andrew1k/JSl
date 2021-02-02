let createCouter = function(counterName) {
    let counter = 0;

    return {
        increment: function() {
            counter++;
        },
        decrement: function() {
            counter--;
        },
        getCounter: function() {
            return counter;
        }
    };
};

let countA = createCouter('counter A');
let countB = createCouter('counter B');

countA.increment();

console.log(countA.getCounter());