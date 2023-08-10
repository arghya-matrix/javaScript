// Variables and block scope
let l=50; // global value
if(true){
    let l=30;//if it's in global then can be redeclared inside a block
    console.log(l);// if the variables are same Takes the nearest value
}
console.log(l); // global value can be accessed trhough out the code
// Same variables cannot be redeclared in global