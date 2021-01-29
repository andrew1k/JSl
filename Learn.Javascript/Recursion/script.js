
let company = { 
    sales: [
        {name: 'John', salary: 1000}, 
        {name: 'Alice', salary: 600 }],
    development: {
      sites: [
          {name: 'Peter', salary: 2000}, 
          {name: 'Alex', salary: 1800 }],
      internals: [
          {name: 'Jack', salary: 1300}]
    }
};

// return sum of salaries
function sumSal(department) {
    
    if (Array.isArray(department)) { // случай (1)
        return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
      } else {
        let sum = 0
        for (let subdep of Object.values(department)) {
        sum += sumSal(subdep)  // рекурсивно вызывается для подотделов, суммируя результаты
        }
        return sum
    }
}

console.log(sumSal(company))



// EX
function sumTo(n) {
    return (n == 1) ? n : n + sumTo(n - 1) 
}
console.log(sumTo(1000))


function sumTo1(n) {
    let sum = 0
    for (let i = n; i >= 1; i--) {
        sum += i
    }
    return sum
}
console.log(sumTo1(1000))

function sumToAr(n, d = 1) {
    
}