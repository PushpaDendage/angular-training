var thisIsAString = "Hello World";
var name = "Adarsh Thakur";
var age = 25;
var city = "Pune";

// var thisIdMyFirstObject = {
//     key: value,
//     key2: value2
// };
var user = {
    name: "Adarsh Thakur",
    age: 25,
    city: 'Pune',
    isMarried: false,
    thisIsUndefined: undefined,
    thisIsNull: null
};

// systematic and maintainable code
// multi-type datatype can be used

// how to use object props
// using dot operator or square braces
// objectName.keyName or object["keyName"]
// alert(user.thisIsNull);
// alert(user["age"]);

// no keys required  and it storesData in a given sequence
// it can store multi-type data
var myFirstArray = ["Adarsh Thakr", 25, false];
// 0th index - "Adarsh Thakur"
// 1st index - 25
// 2nd index - false
// accessing array element
// syntax arrayName[index]
// alert(myFirstArray[1])
// myFirstArray.push(90); // -> adds values to last
// // alert(myFirstArray);
// myFirstArray.pop() // -> remove most recent value or last value
// alert(myFirstArray);
myFirstArray[0] = "Adarsh Thakur";
alert(myFirstArray);
