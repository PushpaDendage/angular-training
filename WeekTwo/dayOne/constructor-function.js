function User(userName, age, gender) {
	// this = {}; this is implicit we do not need to define it. It is already there
	this.name = userName;
	this.age = age;
	this.gender = gender;
	this.greet = function () {
		alert('Hello ' + this.name);
	};
}
// constructor for creating new object
// we need create a variable/object to use function values
//  syntax let objectName = new FunctionName();
let user = new User('Adarsh Thakur', 25, 'Male');
console.log(user.gender);
let bhushan = new User('Bhushan', 21, 'Male');
console.log(bhushan.gender);
// user.greet();

// constructor
// - helped us to create object for accessing function values



// function calculator(num1, num2) {
//     // 2 local variable
//     //  4 function add(),sub(),divide(),multiply(),square()
// }

// const cal_one = new calculator(10, 4);
// cal_one.add();