function possibleBonus(n1, n2){

    let num= n1;

    if(n1==n2)
    return false;

    else if(n1>n2)
    return false;

    else{
    for (let i=1;i<=6;i++)
    {
        n1=num+i;
        if(n1==n2)
        break;
    }
       return n1==n2 ? true : false;
    }
}

let n1=3;
let n2=7;
console.log(possibleBonus(n1, n2));