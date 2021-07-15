// console.log('What do we going to learn do day?');
// console.log(`- Classes in JS
// - What is DOM in JS?
// - Accessing HTML element in JS Dynamically
// - Adding HTML Element to DOM`);
// clasess in JS
// class is nothing but collection of data (properties(variable) and function(methods))
/* class(keyword) className(nameOfYourclass) {
    counstructor(){}
    // properties and functions here
}
*/

class User { //class
    constructor(name,age,gender) { //constructor
        this.name = name; //property
        this.age = age;
        this.gender = gender;
    }
    greet() {
        alert('Hey ' + this.name);
    }
}
let pranaliOnj = new User("Pranali", 21, "female");
let pushpaObj = new User("Pushpa", 21, "female");
console.log(pranaliOnj.name);
pushpaObj.greet()