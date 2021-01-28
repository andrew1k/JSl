function Accum(val) {
	this.value = val;
	this.read = function() {
		this.value += +prompt("Num", 1);
	}
}


let accumulator = new Accum(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.value);