'use strict';

function mul(obj) {
	for (let k in obj) {
		obj[k] *= 2;

	}
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

mul(menu);

console.log(menu);