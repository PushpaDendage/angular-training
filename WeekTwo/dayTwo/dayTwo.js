var aGlobalVar = 80;
console.log("TODAY WE ARE GOING TO LEARN -");
console.log(`
- JavaScript Immediately-invoked Function Expressions (IIFE)
- var vs. let
- Arrays and Methods
- Iterating Over Objects in JS
`);


// function showAlert() {
    //     alert("this is an alert");
    // }

    // showAlert();
    // this is a lengthy way to execute a function

// JavaScript Immediately-invoked Function Expressions (IIFE)
/* syntax
(function(){
    //  your code here
})();
*/
// template literal -> When we were studying string ('' , "" , ``)
// (function () {
//     alert(`line one - this is an alert line 2 - with an multiline`);
// })();

// Scope - Accessabilty of properties inside a block
/*
Two Type of Scope
- Global Scope - when variable accesible globally/outside of any block
- Local Scope - available only inside a block
*/

// Diff var and let
function diffFunction() {
    // Outer Block
    let isAvaiable = true;
    if (isAvaiable) {
        // inner Block
        // let wasInTheBlock = true;
        var wasInTheBlock = true;
        // alert("Yes this is available");
    }
    // console.log(aGlobalVar);
}
// diffFunction();

/* var
1 - It does not have block scope
2 - Used to create Global Variables(a variable acessible throughout the programm)
*/
// let is only valid in given block


// Arrays and it methods
const tempArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function getEvensOnly(arr) {
    let evenArray = [];
    arr.forEach((item) => {
        if (item % 2 == 0) {
            evenArray.push(item);
        }
    })
    return evenArray;
}

 // arrayName (.) methon/FunctionName
    // const test = (ele, index) => {
    //     console.log(ele + "-----" + index);
    // }
    // Iterating or Looping over an Array
    // forEach -> Array Methods -> it takes a funcion as parameter
    // tempArray.forEach(test);
    // tempArray.forEach((ele, index) => {
    //     console.log(ele + "-----" + index);
    // });
// let evens = getEvensOnly(tempArray);
// console.log(evens);

// array.filter
// it takes a function a parameter and returns a boolean value

let evenArr = tempArray.filter((ele, index) => {
    let isEven = false;
    if (ele % 2 == 0) {
        isEven = true;
    }
    return isEven;
})
// console.log(tempArray);

// // shortHand
// let shorEevenArr = tempArray.filter((ele) => ele % 2 == 0);
// let shorOddArr = tempArray.filter((ele) => ele % 2 != 0);
// console.log(shorEevenArr);
// console.log(shorOddArr);
/*
- forEach
- Filter
- map
- unshift
- shift
- pop
- push
- indexOf
..........
*/

let user = {
    name: 'Adarsh',
    age: 25,
    gender: "male",
    isAdmin:true
};
/* when ever you want to loop over an object
you need to do use Object.keys(object)
*/

console.log(Object.keys(user))
Object.keys(user).forEach(key => {
    console.log(user[key])
    // whenever your object keys are dynamic you need to use [] to access object
})