// alert('Yes in DOM.js')
// One thing is clear in JS evrything is an object
// window -> it is an global object availble in browser
// console.dir(window.document);

// window -> there is on property of window -> document


// DOM -> Document Object Model
// console.dir(document.body)

// Adding HTML to the body
// innnerHTML property is used to access and change content
// document.body.innerHTML = "Hey this is the text from JS";

// accessing HTML elements in JS
// 1 - document.getElementById()
// document.getElementById('h3').innerHTML = "This is a dynamic HTML";


// 2- document.getElementsByTagName(tagName)
// document.getElementsByTagName('div')[1].innerHTML = "This is Sencond Div in DOC"
// console.log(document.getElementsByTagName('div')[1])

// 3 - document.getElementsByClassName(className) ? homework/assignment

// changing the HTML Element style dynamically
// document.getElementById('firstElement').style.color = "red";
// document.getElementById('firstElement').style.fontSize = "44px";
// console.dir(document.getElementById('firstElement'))


// adding an HTML Element to DOM
// to Create HTML Element DOM provides a function called "createElement"

// Syntaxt - document.createElement(tagName)

let div = document.createElement('div');
div.innerHTML = "This is an dynamic HTML Element";
div.setAttribute('id', "dyanamic-id"); //adding attribute to
div.setAttribute('class', "test-div");
div.setAttribute('bhushan', "custom");
console.log(div.hasAttribute('bhushan'))
document.body.appendChild(div)
div.removeAttribute('bhushan');
console.log(div.hasAttribute('bhushan'))
