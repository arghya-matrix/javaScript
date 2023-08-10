// Array is a special type of linear object

let dishes= ["Panipuri", 'Biriyani', "Dum aloo"];

console.log(dishes); // Printing the Whole array
console.log(dishes[0]); // Printing dedicated element of array

//Modifying elements in Array

dishes[0]="Paneer";

// Join Method
console.log(dishes.join('-')); // Inside the parenthesis the separator is passed

// Index of 
console.log(dishes.indexOf("Paneer"));// Case Sensitive

//Concatination of Array
let newDishes = ["sweet", "ice-cream"];

console.log(dishes.concat(newDishes));

let updatedDishes= dishes.concat(newDishes);

//length of an Array

console.log(updatedDishes.length);

// Push Method
console.log(updatedDishes.push("Egg-curry")); //Returns New length of the array
console.log(updatedDishes);

//Pop Method
console.log(updatedDishes.pop()); // Everytime the Last element will be deleted
console.log(updatedDishes);