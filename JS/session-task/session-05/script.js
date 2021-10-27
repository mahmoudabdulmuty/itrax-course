// tasks array
const tasks = [];

// add button
function add() {
	const task = document.getElementById('task').value;
	tasks.push(task);
	document.getElementById('task').value = '';
	view();
}

// view button
function view() {
	let li = '';
	let count = tasks.length;
	for (let i = 0; i < count; i++) {
		li +=
			"<li onclick='remove(" + i + ")'>"
			+ tasks[i] +
			'</li> <span onclick="update(' + i + ')" style="color: red">update</span>';
	}
	document.getElementById('list').innerHTML = li;
}

// remove button
function remove(index) {
	tasks.splice(index, 1);
	view();
}

// update
function update(index) {
	document.getElementById('task').value = tasks[index]
	document.getElementById('update').style.display = 'inline-block'
	document.getElementById('add').style.display = 'none'
	document.getElementById('index').value = index
}

// edit
function edit() {
	let index = document.getElementById('index').value
	tasks[index] = document.getElementById('task').value
	document.getElementById('update').style.display = 'none'
	document.getElementById('add').style.display = 'inline-block'

	view()
}
