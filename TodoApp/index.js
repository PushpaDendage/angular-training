// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

function addTodo() {
	let input = document.getElementById('todoinput');
	addTodoInList(input.value);
	input.value = '';
}
markTodoAsDone = (e) => {
	e.target.classList.toggle('done');
};
function addTodoInList(toDoToAdd) {
    if(toDoToAdd == '') return
	let todoListWrapper = document.getElementById('todo-list');
	const todoChild = document.createElement('div');
	todoChild.setAttribute('class', 'todo');
	todoChild.addEventListener('click', (event) => markTodoAsDone(event));
	todoChild.innerHTML = toDoToAdd;
	todoListWrapper.appendChild(todoChild);
}
