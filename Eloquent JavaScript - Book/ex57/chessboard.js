'use strict';

let size = prompt('one side size of board', 8);
let j = ' #';
let k = '# ';
let a;

for (let i = 1; i <= size; i++) {
	if (i % 2 == 0) {
		a = j.repeat(size / 2);
		console.log(a);
	} else {
		a = k.repeat(size / 2);
		console.log(a);
	}
}