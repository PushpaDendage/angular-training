// ## Day Five
// - Data Type & Variables
// - Type Conversion
// - Object
// - Accessing data from object

// Data Types in JS
// String
// 'This is a string' //-> single quote
// "This is a string with double quotes" //-> Double Quote
// `This string inside of backtick` // -> Back Tick
// "This is Adarsh's Class"
// 'This is a "String"'

// Number
// this is a integer value (a +ve or a -ve number)
// 10  // positive
// - 80 // negative
// 0 // zero

// Boolean
// true
// false

// Storing data in JS
// to define a variable -> three ways

// using a keyword var
// syntax var myFirstVariable = value of variable
var myFirstVariable = "This is my first variable";
var aNumberVariable = 10;
var aBooleanVariable = true;
// alert(myFirstVariable);

// using a keyword let
// syntax let myFirstVariable = value of variable
let thisALetVariable = "This a Let Variable"
let thisALetNumberVariable = 10;
// alert(thisALetVariable);

let thisIsLet; // declaration
thisIsLet = "A value given"; // defining a variable

// using a const keyword
// syntax const constantVariable = value of variable
const myFirstConstKeyword = "Constant variable";
// at the time of declaration you need to assign a value
// and once you declare const variable you can reassign a value
// myFirstConstKeyword = "Value changed";
// Uncaught TypeError: Assignment to constant variable.



// diff b/t var and let keyword
// you can access a var keyword variable before declaring
// alert(thisIsAVar)
// var thisIsAVar = 10;

// alert(thisIsAVar)
// let thisIsAVar = 10;
// Uncaught ReferenceError: Cannot access
// 'thisIsAVar' before initialization


// Special datatypes in JS
// undefined & null
var undefinedVar;
alert(undefinedVar);
undefinedVar = 10;
// when ever you just declare a variable it is by default a undefined

//  null signifies nothing
var nullVariable = null;
alert(nullVariable);
