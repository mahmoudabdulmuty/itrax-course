const icons = document.querySelectorAll('.icon');

for (let i = 0; i < icons.length; i++) {
	icons[i].addEventListener('click', function () {
		icons[i].nextElementSibling.classList.toggle('d-block');
	});
}
