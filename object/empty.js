//function isEmpty(obj) {
//	if (obj == undefined) {
//		return true;
//	} else {
//		return false;
//	}
//};

function isEmpty(a) {
	for (let k in a) {
		return false;
	}
	return true;
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false