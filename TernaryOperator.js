//ternary operator
let score=31;
let sgpa= 3.85
if(score>40){
    console.log("Pass");
}
else{
    console.log("Fail");
}

// Single line Solution

let result= score > 50 ? "Pass" : "Fail"; // ? for if statement : is for else statement
console.log(result);

//nested ternary operator

result= score > 40 ? sgpa > 4.0 ? "pass" : "low Sgpa" :"Low Score";
console.log(result);

