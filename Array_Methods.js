// Mutating methods :  changes the original array 
// Reverse
let arr = ['a', 'b', 'c', 'd'];
//console.log(arr.reverse());

// Non-Mutating methods : doesn't changes the original array
let num=[1,2,3,4]
//console.log(num.concat(arr));

// join method : converts array to String

let result = num.join();
console.log(result, typeof (result));

// Slice methods
// used to extract a part of an Array
// Array.slice(startIndex, lastIndex (Excluded))
// return new array of extracted elements
let array = [1,2,3,4, 87,54,21];
console.log(array.slice(1,5)); // extracted value will be from 1-4
console.log(array.slice(2)); // from 2- till the end will be extracted
console.log(array.slice(-2)); // Negative value will print the array in reverse order

//Splice method 
// used to add new elements to the array
// Array .splice(indexvalue, deleteValue, valueToBeAdded)
// Returns deleted items in a format of array

let arr2= [3,4,6,8,9,5,12];
//console.log(arr2.splice(3)); // in case of single value in parenthesis : Till the value the array elements will be deleted
console.log("Updated Array", arr2.splice(2,1, 10));
console.log("original array", arr2); // Original value will be mutated

// at method
// accessing the element from an array

console.log(arr2.at(0));
console.log(arr2.at(-3));

// at func in strings
let str= "Shyam";
console.log(str.at(-2)); // Access elements in reversed order
console.log(str.at(2)); // access elements in 

// map method
// modify the elements inside the array
let salary= [3000,1000,5000,4000,8000,9000];
let newSalary= salary.map(amount =>{
    let increment=amount/2;
    return amount+increment;
})
console.log(newSalary);