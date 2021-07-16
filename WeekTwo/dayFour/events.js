console.log(`
- Introduction to Event an Event Handing in JS
- Adding Event using HTML & JS
- Submmitting a Form in JS`
);

// What is Event?

// Events are nothing but action/reaction to particular interaction
// What could be a event
// a user clicking a button
// a form submission
// Text selection
// a response to a particular program


// Predefined Event(Syetem Event) and User-defined Event(Custom Event)
// Predefined Event -> Example. Cliking a Button, Summittig a form

/* writing an event 2 Ways
1. Embbed in HTML(static way)
2. Add it from JS(dynamic way)
*/


// Embbeding a Event in html
// Syntax
// <htmlElement eventName="functionName()"> </>

{/* <button class="btn" onclick="alert('This is my first Event')">Click Me!</button> */}
buttonClick = (e) => {
    // alert('Alert from JS');
    console.dir(e.target.style)
    e.target.innerHTML = "Dyanamic Text"
    e.target.style.backgroundColor = "red";
}


// Adding an event dynamically
// addEventListener -> from document object -> responsible for adding a event
// targethtmlEle.addEventListener(eventType,function(event){})
// targethtmlEle.addEventListener(eventType,(event)=>{})
let btn = document.getElementById('myBtn');
btn.addEventListener('click', (bhushan) => {
    // bhushan.target.innerHTML = "Dyanamic Text"
    // bhushan.target.style.backgroundColor = "red";
    console.log('This is and Log')
})
removeEvent = (e) => {
    // to remove an event from HTML element we have removeEventLister
    // targetElement.removeEventLister('click');
    let btn = document.getElementById('myBtn');
    btn.removeEventListener('click', () => {
        console.log('Element Click removed')
    })
}

