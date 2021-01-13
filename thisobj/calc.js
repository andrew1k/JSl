let calc = {
	read : function() {
		this.a = +prompt('a');
		this.b = +prompt('b');
	},
	sum : function() {
		return this.a + this.b;
	},
	mul : function() {
		return this.a * this.b;
	}
}

calc.read();
alert( calc.sum() );
alert( calc.mul() );