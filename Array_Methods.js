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

// Filter Methods
// Use to perform the filteration on array

let gifts = ["Teddy-Bear", "Watch", "Ring", "Chain", "watch", "ring"];
let filteredArray= gifts.filter(gift => { // elements got selected in this line
    if(gift== "watch" || gift== "ring")
    // only "watch and ring" gifts are getting filtered
    return gift;
})

console.log(filteredArray);
// it returns a new array
// the length of new array may or may not be equal to the original array

// reduce methods (non-mutating methods)
// Run reducer function for each element elements got combined by addtion, multiplication, concatination etc.
// Array.reduce(function(total, currentValue),initialVal); total is the recent element and currentVal is next element of array
// initialVal indicates the first value of total 

let nums=[1, 5,5,4,0,1];
let sum= nums.reduce(function(total, currentValue){
    return total+currentValue;
},0)
console.log(sum);

//find method
// it is a higher order method and works with the help of functional programming
// returns the element that matches at first index


let students=[{id:1, name:"Tom", score: 8.96}, {id:2, name:"Jerry", score: 9.31}];
let highestScore= students.find(student => {
    return student.score >=9.0 ;
});
console.log(highestScore);

// find index method
// finds the index of the required element
// Execute function for each array element
// It return the very first element which meets the function condition
let ages=[21,22,45,45,35,12,1,3,2];
let ageResult= ages.findIndex(age =>{
    return age<21;
});
console.log(ageResult);

// Some and Every Method
// in "some" if any element meets the criteria then it returns true (loose checking)
// in "every" method every element should meets the condition to get true (strict checking)
let scores = [54,79,69,84,52,53,58]