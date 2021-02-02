let obj = {
    get propName() {
        // геттер, срабатывает при чтении obj.propName
    },

    set propName(value) {
        // сеттер, срабатывает при записи obj.propName = value
    }
};



function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    // возраст рассчитывается из текущей даты и дня рождения
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
    });
}

let john = new User("John", new Date(1992, 6, 1));

alert(john.birthday); // доступен как день рождения
alert(john.age); // ...так и возраст