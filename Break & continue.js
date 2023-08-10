// Break

let i=0;

for(i=0;i<10;i++)
{
    if(i==3){
        break; // loop will broke and discontinued.
    }
}
console.log(i); // prints 3

// continue

let text=' ';
for(i=0;i<10;i++){
    if(i<=3)
    {
        continue; // skips the loop if the condition meets
    }
    text=text+i;
}
console.log(text);