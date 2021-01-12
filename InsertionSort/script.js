function insertionSort(inputArr) {
	for (let i = 1; i < inputArr.length; i++) {
		let current = inputArr[i];
		let j = i - 1;
		while ((j > -1) && (current < inputArr[j])) {
			inputArr[j+1] = inputArr[j];
			j--;
		}
		inputArr[j+1] = current;
	}
	return inputArr;
}

console.log(insertionSort([1,2,4,3,7,6,4,8,9]));