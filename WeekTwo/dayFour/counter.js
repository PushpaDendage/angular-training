var counter = 0;
var targetDiv = document.getElementById('counter');

renderCounter = () => {
    targetDiv.innerHTML = counter;
}

increment = () => {
	console.log('Before Increment -> ' + counter);
	counter = counter + 1;
	console.log('After Increment -> ' + counter);
	renderCounter();
};

decrement = () => {
	console.log('Before Decrement -> ' + counter);
	counter = counter - 1;
	console.log('After Decrement -> ' + counter);
	renderCounter();
};
