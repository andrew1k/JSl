let obj = {
    number: 5,
    sayNumber() {
        let say = () => console.log(this)
        say()
    }
}
obj.sayNumber()

let names = ['Harry', 'Ron', 'Hermione', 'Voldemort']
let shortNames = names.filter(name => name.length <= 5)
console.log(shortNames)

let mapped = names.map(name => name.toLowerCase())
console.log(mapped)

function fetchData(data, count = 0) {
    console.log(`${data} in ${count}`)
}

fetchData('any')