function pow(obj) {
	for (let k in obj) {
		for (var i = 0; i < obj.length; i *= obj[k]) {
			return i;
		}
	}
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log(pow(salaries));