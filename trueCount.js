function Count(arr){
    let j=0;
    for (let i=0;i<arr.length;i++)
    {
        if(arr[i] == true)
        {
            j++;
        }
    }
    return j;
}

let arr= [true, false, false, true, false];
console.log(Count(arr));