// creating h1 element
const h1 = document.createElement('h1');

// submit Result function
const submitResult = function () {
	const grade = document.getElementById('grade');
	let result = 'Result is ';

	if (grade.value >= 85) result += 'A';
	else if (grade.value >= 75) result += 'B';
	else if (grade.value >= 65) result += 'C';
	else if (grade.value >= 60) result += 'D';
	else result += 'F';

	h1.textContent = result;
};

// clear Result function
const clearResult = function () {
	h1.textContent = '';
	grade.value = '';
};

document.body.appendChild(h1);
