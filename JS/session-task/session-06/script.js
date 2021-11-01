// task01 -- Solution#1
// const img1 = document.getElementById('img-1');
// const img2 = document.getElementById('img-2');
// const img3 = document.getElementById('img-3');
// const defaultImg = document.getElementById('default');

// img1.onclick = function () {
// 	defaultImg.src = './img/img-1.jpg';
// };

// img2.onclick = function () {
// 	defaultImg.src = './img/img-2.jpg';
// };

// img3.onclick = function () {
// 	defaultImg.src = './img/img-3.jpeg';
// };

// task01 -- Solution#2
function changeSrc(img) {
	document.getElementById('default').src = img;
}

// task02 -- Solution
const arrOfImages = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpeg'];

let i = 0;
function slideShow() {
	document.getElementById('img').src = arrOfImages[i];
	i++;
	if (i >= arrOfImages.length) {
		i = 0;
	}
}

setInterval('slideShow()', 1000);
