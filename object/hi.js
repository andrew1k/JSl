"use strict";

let user = {
	name : "John",
	surname : "Smith",
};

user.name = "Pete";

console.log(user.name);

delete user.name;

for (let key in user) {
	console.log(key);
};