// used in the "conditional" statements
let result;
let age= 16;
switch(age){
    case 15:
    case 16:
    case 17:
        result = "These ages are allowed";
        break; // if break statement is not given then it will continue till the end of the switch loop
        
    default:
        result = "Not Allowed";
}
 console.log(result);