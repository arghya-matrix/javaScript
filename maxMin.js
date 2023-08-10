function minMax(arr) {
	let a=[];
	let max=0;
	let min=arr[0];
	for (let i=0;i<arr.length;i++)
		{
			if (arr[i]>max)
				max=arr[i];
				console.log(max);
			if (arr[i]<min)
				min=arr[i];
		}
	a.push(max);
	a.push(min);
	return (a);
}
let arr= [14, 35, 6, 1, 34, 54];
console.log(minMax(arr));