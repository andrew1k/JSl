var ford = Object.create({
    calcDistPerYear: function () {
        Object,defineProperty(this, 'distancePerYear', {
            value: Math.ceil(this.distance / this.age),
            enumerable: true,

        })
    }
}, {
    name: {
        value: 'Ford',
        enumerable: true,
        writable: false
    },
    model: {
        value: 'Focus',
        enumerable: true,
        writable: false
    },
    year: {
        value: 2015,
        enumerable: true,
        writable: false
    },
    distance: {
        value: 120500,
        enumerable: true,
        writable: true
    },
    age: {
        enumerable: true,
        get: function() {
            console.log('Get a year');
            return  new Date().getFullYear() - this.year
        },
        set: function() {
            console.log('Set up a new year');
        }
    }
})

console.log(ford);

for (var key in ford) {
    console.log(key);
}

