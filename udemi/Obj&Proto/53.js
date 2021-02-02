let person = {
    age: 22, 
    name: 'Meg',
    job: 'Frontend',
    // displayInfo: function(ms) {
    //     let _this = this
    //     setTimeout(function() {
    //     console.log('Name: ' + _this.name);
    //     console.log('Age: ' + _this.age);
    //     console.log('Job: ' + _this.job);    
    //     }, ms)
    // }
    displayInfo: function(ms) {
        // .bind()
        setTimeout(function() {
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
        console.log('Job: ' + this.job);    
        }.bind(this), ms)
    }
}

person.displayInfo(5000)



