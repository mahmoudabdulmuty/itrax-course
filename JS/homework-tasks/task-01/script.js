const sum = document.getElementById('sum');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const h1 = document.createElement('h1');

sum.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const sum = value1 + value2;
	document.body.appendChild(h1);
	h1.textContent = sum;
};

minus.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const minus = value1 - value2;
	document.body.appendChild(h1);
	h1.textContent = minus;
};
multiply.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const multiply = value1 * value2;
	document.body.appendChild(h1);
	h1.textContent = multiply;
};
divide.onclick = function () {
	const value1 = +document.getElementById('value1').value;
	const value2 = +document.getElementById('value2').value;
	const divide = value1 / value2;
	document.body.appendChild(h1);
	h1.textContent = divide.toFixed(2);
};
