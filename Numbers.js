// numbers

let score= 50;
console.log(score, typeof score);

let quotient = score/2;// give quotient
console.log(quotient);

let remainder = score%2; // returns remainder
console.log(remainder);

// priority and precedence in mathematical expression
// 1 () Bracketes
// 2 ** power operator
// 3 * / % (From left to Right)
// 4 + - (From left to Right)

let mathEx= score*2+(4*3) - 8/2 % 4;
console.log(mathEx);

// concatination of numbers with strings
let concat= 'My final score is = ' + mathEx;
console.log(concat);
// dynamic conversions in javascrips are usual. javaScript is called
// loosely type laguage