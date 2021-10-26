// Body Style
document.body.style.cssText =
	"line-height: 26px; font-size: 15px; font-family: 'Roboto', sans-serif; font-weight: 400;color: #777;";

// Create Container
const container = document.createElement('section');
container.className = 'container';
container.style.cssText = 'display: flex; flex-wrap: wrap; gap: 30px;';

for (let i = 0; i < 9; i++) {
	// Create Single Div
	const single = document.createElement('div');
	single.className = 'single';

	// Create Image Box
	const imgBox = document.createElement('div');
	imgBox.className = 'img-box';
	imgBox.style.cssText = 'overflow: hidden; position: relative';

	// Create Image
	const img = document.createElement('img');
	img.src = `./img/img-${i + 1}.webp`;
	img.alt = 'image';
	img.style.cssText = 'display: block';

	// Create Overlay
	const overlay = document.createElement('div');
	overlay.className = 'overlay';
	overlay.style.cssText =
		'position: absolute; left: 0; top: 0; height: 100%; width: 100%; transition: all .4s ease 0s;';

	// hover effect on image
	imgBox.onmouseover = function hoverOverSingle() {
		overlay.style.backgroundColor = 'rgba(77,87,222,.5)';
	};
	imgBox.onmouseleave = function hoverOverSingle() {
		overlay.style.backgroundColor = '';
	};

	// Create Content
	const content = document.createElement('div');
	content.className = 'content';

	// Create Title
	const title = document.createElement('h4');
	title.className = 'title';
	title.style.cssText =
		'text-transform: uppercase; font-size: 20px; margin-bottom: 0;';

	// Create Title Link
	const titleLink = document.createElement('a');
	titleLink.href = '#';
	titleLink.className = 'title-link';
	titleLink.textContent = 'minimal design';
	titleLink.style.cssText =
		'text-decoration: none; transition: all 0.3s ease-in-out; background-color: transparent; color: #000;';

	// Create Description
	const description = document.createElement('p');
	description.className = 'description';
	description.textContent = 'Animated, portfolio';
	description.style.cssText = 'margin-top: 0;margin-bottom: 1rem;';

	// Appending Elements
	container.append(single);
	single.append(imgBox);
	single.append(content);
	imgBox.append(img);
	imgBox.append(overlay);
	content.append(title);
	content.append(description);
	title.append(titleLink);
}

// Adding Container Component to Body
document.body.prepend(container);

console.log(this);
