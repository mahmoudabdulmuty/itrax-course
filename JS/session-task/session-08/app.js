// window.onscroll = function () {
// 	console.log(window.scrollY);
// };

window.onscroll = function () {
	if (window.scrollY > 100) {
		// console.log(document.querySelector('.to-top'));
		document.getElementById('gototop').classList.add('to-top');
	} else {
		document.getElementById('gototop').classList.remove('to-top');
	}
};

window.onscroll = function () {
	if (window.scrollY > 100) {
		document.querySelector('.topnav').style.backgroundColor = '#f1f1f1';
		for (let i = 0; i < document.querySelectorAll('.link').length; i++) {
			document.querySelectorAll('.link')[i].style.color = '#000';
		}
	} else {
		document.querySelector('.topnav').style.backgroundColor = '#333';
		for (let i = 0; i < document.querySelectorAll('.link').length; i++) {
			document.querySelectorAll('.link')[i].style.color = '';
		}
	}
};
