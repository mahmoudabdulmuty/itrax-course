// creating h1 element
const h1 = document.createElement('h1');

// submit Result function
const submitResult = function () {
	const grade = document.getElementById('grade');
	let result = 'النتيجة ';

	if (grade.value >= 85) result += 'امتياز';
	else if (grade.value >= 75) result += 'جيد جدا';
	else if (grade.value >= 65) result += 'جيد';
	else if (grade.value >= 60) result += 'مقبول';
	else result += 'راسب';

	h1.textContent = result;
};

// clear Result function
const clearResult = function () {
	h1.textContent = '';
	grade.value = '';
};

document.body.appendChild(h1);
