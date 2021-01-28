function isEven(a) {
	if (a == 0) {
		return 'even';
	} else if (a == 1) {
		return 'odd';
	} else if (a < 0) {
		return isEven(-a - 2);
	} else {
		return isEven(a - 2);
	}
}

console.log(isEven(75));

console.log(isEven(50));

console.log(isEven(-10));

console.log(isEven(-75));