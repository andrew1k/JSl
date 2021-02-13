let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

alert(admin.fullName); // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
alert(admin.name); // Alice
alert(admin.surname); // Cooper

// Здесь в строке (*) свойство admin.fullName имеет геттер в прототипе user, поэтому вызывается он. 
// В строке (**) свойство также имеет сеттер в прототипе, который и будет вызван.




// FOR...IN
let animal = {
    eats: true
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

// Object.keys возвращает только собственные ключи
alert(Object.keys(rabbit)); // jumps

// for..in проходит и по своим, и по унаследованным ключам
for (let prop in rabbit) alert(prop); // jumps, затем eats




// EX
let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  alert( pockets.pen ); // 3
  alert( bed.glasses ); // 1
  alert( table.money ); // undefined