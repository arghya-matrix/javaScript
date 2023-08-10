function canNest(arr1, arr2) {
	let max1=Math.max(...arr1);
	let max2=Math.max(...arr2);
	let min1=Math.min(...arr1);
	let min2=Math.min(...arr2);
	console.log(max1, max2, min1, min2);
	return max1<max2 && min1>min2 ? true : false;
}
let arr1=[1, 2, 3, 4];
let arr2=[0, 6];
console.log(canNest(arr1,arr2));