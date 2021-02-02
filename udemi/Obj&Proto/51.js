let person = {
    name: 'Meg',
    age: 22, 
    job: 'Frontend'
}

Object.keys(person).forEach(function(key) {
    console.log(person[key]);
})