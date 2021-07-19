// pranali -> what is querySelector?

// console.log(document.querySelector(".parent-div.super"))
// console.log(document.getElementsByClassName("parent-div"))
// console.log(document.querySelector(".parent-div > .child.smart"))


// What is inheritance?

let user = {
    name: "Adarsh",
}
// console.log(user);

// every javaScript object has a implicit object __proro__


let animal = {
    name:"Animal",
    eats: true,
    walks: () => {
        alert("yes I walk " + this.name);
    }
}

let rabbit = {
    name:"Rabbit",
    jumps:true
}

// rabbit.__proto__ = animal;

// rabbit.walks()

// morder ways to set and get prototype
// getPrototypeOf =>

// console.log(Object.getPrototypeOf(rabbit))

// setPrototypeOf =>

Object.setPrototypeOf(rabbit, animal);
console.log(rabbit)

console.log(Object.getPrototypeOf(rabbit))



