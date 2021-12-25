// MEMES API
// function showMemes() {
// 	const xhr = new XMLHttpRequest();

// 	xhr.open('GET', 'https://api.imgflip.com/get_memes', true);

// 	xhr.onload = function () {
// 		if (this.status === 200) {
// 			const response = JSON.parse(this.response);
// 			const memesArray = response.data.memes;
// 			memesArray.forEach((meme) => {
// 				const img = document.createElement('img');
// 				img.src = meme.url;
// 				document.getElementById('root').appendChild(img);
// 			});
// 		}
// 	};

// 	xhr.send();
// }

// NEWS API
// function showNews() {
// 	let xhr = new XMLHttpRequest();
// 	let accessKey = 'febafef5a78b2b04ed39b9436633f0b1';

// 	xhr.open(
// 		'GET',
// 		'http://api.mediastack.com/v1/news?access_key=' +
// 			accessKey +
// 			'&countries=eg',
// 		true
// 	);

// 	xhr.onload = function () {
// 		if (this.status === 200) {
// 			let response = JSON.parse(this.response);
// 			let dataArr = response.data;
// 			dataArr.forEach((element) => {
// 				const title = document.createElement('h1');
// 				const description = document.createElement('p');
// 				const url = document.createElement('a');
// 				const img = document.createElement('img');
// 				title.innerText = element.title;
// 				description.innerText = element.description;
// 				url.href = element.url;
// 				url.innerText = 'Link';
// 				img.src = element.image;
// 				document.getElementById('root').appendChild(title);
// 				document.getElementById('root').appendChild(description);
// 				document.getElementById('root').appendChild(img);
// 				document.getElementById('root').appendChild(url);
// 			});
// 		}
// 	};

// 	xhr.send();
// }

// NEWS API => 2nd one
// function showNews() {
// 	let xhr = new XMLHttpRequest();
// 	const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
// 	const apiKey = 'pub_215255587cf6ea236ab0e263599b7a24bc31';
// 	xhr.open(
// 		'GET',
// 		proxyUrl +
// 			'https://newsdata.io/api/1/news?apikey=' +
// 			apiKey +
// 			'&country=eg',
// 		true
// 	);

// 	xhr.onload = function () {
// 		if (this.status === 200) {
// 			let results = JSON.parse(this.response).results;
// 			results.forEach((result) => {
// 				const title = document.createElement('h1');
// 				const link = document.createElement('a');
// 				title.innerText = result.title;
// 				link.href = result.link;
// 				link.innerText = 'link';
// 				document.getElementById('root').append(title, link);
// 			});
// 		}
// 	};
// 	xhr.send();
// }

// NEWS API => 3rd one
// function showNews() {
// 	const xhr = new XMLHttpRequest();
// 	const apiKey = 'f7f36426c23f4ae28eb6d7a9dbda0b04';

// 	xhr.onload = function () {
// 		if (this.status === 200) {
// 			let articles = JSON.parse(this.response).articles;
// 			articles.forEach((article) => {
// 				const title = document.createElement('h1');
// 				const description = document.createElement('p');
// 				const url = document.createElement('a');
// 				const urlToImage = document.createElement('img');
// 				title.innerText = article.title;
// 				description.innerText = article.description;
// 				url.href = article.url;
// 				url.innerText = 'Link';
// 				urlToImage.src = article.urlToImage;
// 				document
// 					.getElementById('root')
// 					.append(title, description, url, urlToImage);
// 			});
// 		}
// 	};
// 	xhr.open(
// 		'GET',
// 		'https://newsapi.org/v2/top-headlines?country=eg&category=sports&apiKey=' +
// 			apiKey,
// 		true
// 	);
// 	xhr.send();
// }

// NewsAPI with Fetch using Promises
// function showNews() {
// 	fetch(
// 		'https://newsapi.org/v2/everything?q=tesla&from=2021-10-11&sortBy=publishedAt&apiKey=f7f36426c23f4ae28eb6d7a9dbda0b04'
// 	)
// 		.then((response) => {
// 			return response.json();
// 		})
// 		.then((responseText) => {
// 			const articles = responseText.articles;
// 			articles.forEach((article) => {
// 				const title = document.createElement('h1');
// 				const description = document.createElement('p');
// 				const url = document.createElement('a');
// 				const urlToImage = document.createElement('img');
// 				title.innerText = article.title;
// 				description.innerText = article.description;
// 				url.href = article.url;
// 				url.innerText = 'Link';
// 				urlToImage.src = article.urlToImage;
// 				document
// 					.getElementById('root')
// 					.append(title, description, url, urlToImage);
// 			});
// 		});
// }

// NewsAPI with fetch using Async Await
// async function showNews() {
// 	const response = await fetch(
// 		'https://newsapi.org/v2/everything?q=tesla&from=2021-10-11&sortBy=publishedAt&apiKey=f7f36426c23f4ae28eb6d7a9dbda0b04'
// 	);
// 	const responseText = await response.json();
// 	const articles = responseText.articles;
// 	articles.forEach((article) => {
// 		const title = document.createElement('h1');
// 		const description = document.createElement('p');
// 		const url = document.createElement('a');
// 		const urlToImage = document.createElement('img');
// 		title.innerText = article.title;
// 		description.innerText = article.description;
// 		url.href = article.url;
// 		url.innerText = 'Link';
// 		urlToImage.src = article.urlToImage;
// 		document.getElementById('root').append(title, description, url, urlToImage);
// 	});
// }

// function getData() {
// 	var ajax = new XMLHttpRequest();
// 	ajax.open('GET', 'https://api.github.com/users/mahmoudabdulmuty/repos');
// 	ajax.send();

// 	ajax.onreadystatechange = function () {
// 		if (ajax.readyState === 4) {
// 			var data = JSON.parse(ajax.response);
// 			var str = '';
// 			for (var i = 0; i < data.length; i++) {
// 				str += '<li>' + data[i].name + '</li>';
// 			}
// 			document.getElementById('list').innerHTML = str;
// 		}
// 	};
// }
