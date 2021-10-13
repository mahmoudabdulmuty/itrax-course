const say = document.getElementById('say');
const h1 = document.getElementById('h1');

say.onclick = function () {
	const nameValue = document.getElementById('name').value;
	h1.innerHTML = '<h1>' + nameValue + '</h1>';
};
