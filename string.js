let firstName = "hello";
let lastName = "world";

console.log(firstName, lastName);
// using + operator

let fullName = firstName + " " + lastName;
console.log(fullName);

//using template literals

let fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

//upper case
let upperCase = fullName.toUpperCase();
console.log(upperCase);

//lower case

let lowerCase = upperCase.toLowerCase();
console.log(lowerCase);

// index of any alphabet

console.log(fullName.indexOf("r"));
// indexOf() function only returns the index of first occuring letter

console.log(firstName.indexOf("l"));

// index of alphabet last occuring

let hobbies = "coding, reading, running";

console.log(hobbies.lastIndexOf("c"));
// trim method removes unwanted space in a string

console.log(hobbies);
let result = hobbies.trim();
console.log(result);

//include method helps returns true in the sub string is presented in the string

console.log(result.includes("reading"));

// Slice method : returns a cope of string within given index

let name = "hello world";
console.log(name.slice(0, 6)); //excluding the last one

// string spilit method
let colors = "Brown Black Red White Gray";
let arrColors = colors.split(" ");
// converts string to array by using separator inside the parethesis of spilit
console.log(arrColors);

// javascripts are immutable

let str = "Hello World";

str[0] = "p";
str[1] = "q";
console.log(str);

// if nother string is addaed to the same variable then it will be alloted to a new memory location;
// previous string will not be overwrited