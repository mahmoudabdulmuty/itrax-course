const h1 = document.createElement('h1');
const users = [];
document.getElementById('add').onclick = function () {
	users.push(document.getElementById('user').value);
	document.body.appendChild(h1);
	h1.textContent = 'users numbers is ' + users.length;
	document.getElementById('user').value = '';
};
