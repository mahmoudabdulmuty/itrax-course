import { checkData } from './validation.js';

// const username = document.getElementById('username');
// const btn = document.getElementById('submit');
// const h1 = document.getElementById('h1');

// btn.addEventListener('click', () => {
// 	// h1.textContent = checkData(username);
// 	checkData
// 		? username.classList.add('success')
// 		: username.classList.add('warning');
// });

import { sum } from './calculator.js';

const sumButton = document.getElementById('sum');

sumButton.addEventListener('click', function () {
	const valueOne = document.getElementById('value1').value;
	const valueTwo = document.getElementById('value2').value;
	sum(valueOne, valueTwo);
	const h1 = document.querySelector('h1');
	h1.textContent = 'Result is ' + sum;
});
