const names = ['mohamed', 'eslam', 'karam', 'ahmed', 'radwa', 'sara'];

let i = 0;
while (i < names.length) {
	const name = names[i];
	console.log(name);
	i++;
}

for (let i = 1; i <= 13; i++) {
	if (i === 7) console.log('Mahmoud');
	else console.log(i);
}

const numbers = [20, 50, 1, 65, 5, 100, 567, 7];

const getMax = function (arr) {
	let max = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
};

const getMin = function (arr) {
	let min = arr[0];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
};

console.log(getMax(numbers));
console.log(getMin(numbers));
