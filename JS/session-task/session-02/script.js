const h1 = document.createElement('h1');

const calc = function () {
	if (document.getElementById('select').value === 'sum') {
		h1.textContent = +value1.value + +value2.value;
	} else if (document.getElementById('select').value === 'minus') {
		h1.textContent = value1.value - value2.value;
	} else if (document.getElementById('select').value === 'multiply') {
		h1.textContent = value1.value * value2.value;
	} else if (document.getElementById('select').value === 'divison') {
		h1.textContent = value1.value / value2.value;
	}
	document.body.appendChild(h1);
};
