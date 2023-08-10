function shiftToRight(x, y) {
    let result = x/2**y;
   return (Math.floor(result));
}

let x=80;
let y=3;
console.log(shiftToRight(x,y));