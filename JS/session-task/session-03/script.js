const h1 = document.createElement('h1');

const calc = function () {
	const tax = +document.getElementById('tax').value;
	if (tax >= 10000) h1.textContent = (30 / 100) * tax;
	else if (tax >= 1000) h1.textContent = (20 / 100) * tax;
	else h1.textContent = (10 / 100) * tax;
};

document.body.append(h1);
