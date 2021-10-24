// creating h1 element
const h1 = document.createElement('h1');

// submit Result function
const submitResult = function () {
	const grade = +document.getElementById('grade').value;

	let result = "You've got an ";

	if (!grade) result = '';
	else if (grade > 100 || grade < 0) result = 'WRONG ENTRY!!!!!!!';
	else if (grade >= 85) result += 'A';
	else if (grade >= 75) result += 'B';
	else if (grade >= 65) result += 'C';
	else if (grade >= 60) result += 'D';
	else result += 'F';

	h1.textContent = result;
};

document.body.appendChild(h1);
