const unsorted = [2, 6, 4, 97, 9, 10, 300, 378, 47, 88, 1, 11, -5, -100];

function getIndex(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > val) {
			return i;
		}
	}
	return arr.length;
}

function sortedArray(arr) {
	if (arr === null || arr.length === 0 || arr.length === 1) {
		return arr;
	} else {
		let sortedArr = sortedArray(arr.slice(1));
		let value = arr[0];
		let idx = getIndex(sortedArr, value);
		sortedArr.splice(idx, 0, value);
		return sortedArr;
	}
}

const newArr = sortedArray(unsorted);
console.log(newArr);
