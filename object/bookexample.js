function sum(obj) {
	let s = 0;
	for (let k in obj) {
		s += obj[k];
	}
	return s;
	
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

 console.log(sum(salaries));