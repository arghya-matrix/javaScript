// Functions
// A piece of code can be used multiple time in the program

// Declaration
function nameOffFunction(){
    console.log("Code is running inside the function");
}

// Function call
nameOffFunction();

nameOffFunction();

// function Expression
// can be declared using let var, const, keywords
//cannot be called before initialization
// fun(); Cannot access 'fun' before initialization
// console.log(fun(2,3)); // fun is not a function
var fun= function(a,b){ // also known as anonymous function
    console.log("This is an example of Function Expression");
    return a+b;
}
console.log(fun(2,3));

// Arrow function
// Special form of function expression
// No need of function keyword
// Not hoisted to the top of the code

let sum=(a,b) => {
    return a+b;
}

console.log(sum(5,6));

let multiply = (a,b) => a*b;
console.log(multiply(5,6));

// Passing function as an argument
// Higher order functions

let upperCase = (str) => {
    return str.toUpperCase();
}

let lowerCase = (str) => {
    return str.toLowerCase();
}

let transform = (str, fun) => {
    return fun(str);
};

console.log(transform("HELLO", lowerCase));

// Another Example of passing function as an argument

let invitation = (msg) =>{
    return function(name){
        return (`${msg} ${name}`);
    }
}
// console.log(invitation ("You are invited to the function")("Harry"));

let invited = invitation("You are invited to the function");
console.log(invited ("Harry"));

// Function
// Immidiately Invoked Function Expression
// Excuted only once & executes at the very moment it is invoked or called

(function(name){
    console.log(`This is an example of ${name} `);
}) ("IIFE")

// setTimeOut & setInterval
// setInterval => Runs function "Once" after the timer ends
// setTimeOut => Runs function repeatedly, starting after the interval then keep on repeating
// setTimeOut(function|code, delay, arg1, arg2.... argn);
function greet(){
    console.log("It is a timeout function.");
}
setTimeout(greet,5000);

function bid(name){
    console.log(`Good Afternoon ${name}`);
}
setInterval(bid,2000, "Sir");
