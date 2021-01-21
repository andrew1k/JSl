'use strict';

function sort(arr) {
	for (var i = 1; i < arr.length; i++) {
		let k = arr[i];
		let j = i - 1;
		while ((j > -1) && (arr[j] > k)) {
			arr[j + 1] = arr[j]
			j--;
		}
		arr[j + 1] = k;
	}
	return arr;
}

console.log(sort([5,6,7,8,9,1,2,3,4]));
