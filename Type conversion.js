// Type Conversion

let stringType = "32";
console.log(stringType, typeof stringType);

// Operator in different data type
let num1 = 45;
let str2 = "20";

let multiply = num1 * str2; // converted into number as higher priority
let sub = num1 - str2; // it is also converted into number as higher priority
let add = num1 + str2; // o/p= "4520";
// if neither can be converted in string nor in number the NaN will be printed
// String to number
// Using number Method

let numberType = Number(stringType);
console.log(numberType, typeof numberType);

let str = "Hello world";
let num = Number(str);
console.log(num, typeof num); // o/p is NaN(Not a Number)

// In number Method passing String Must be of numeric values

//number to string

numberType = 32;
console.log(numberType, typeof numberType);

stringType = String(numberType);
console.log(stringType, typeof stringType);

// Any Number value can be converted to strings but any String cannot be
// converted to number

// Boolean

let age = 23;
let booleanValueOfAge = Boolean(age);

// Empty strings returns False
// 0 or Null value returns false

console.log("Boolean Value of age is ", booleanValueOfAge);
