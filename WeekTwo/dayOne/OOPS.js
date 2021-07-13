console.log('Welcome to week 2 of Angular Training');
// let,var and const
// let user = {
// 	name: 'Adarsh Thakur',
// 	age: 25,
// };
// alert('Hello ' + user.name); // dot operator
// alert(user['age']); // square braces

let userObject = {
	name: 'Adarsh Thakur',
	age: 25,
	gender: 'Male',
	greet() {
		alert('Hello ' + this.name + 'You are ' + this.age + 'Years old');
	},
	printThis() {
		// normal function
		this.greet();
		console.log(this);
	},
	printThisWithArrow: () => {
		// arrow function
		console.log(this);
	},
};
// function greet() {
//     alert("Hello " + userObject.name);
// }
// adding a function to a object
// userObject.greetUser = greet;

// userObject.printThis();
userObject.printThisWithArrow();
userObject.greet();
// when ever we write function as a expression(arrow function) we do not have access to this
// concept of this -> this basically contains the all the data inside the block
