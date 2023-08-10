function timeForMilkAndCookies(date) {
	let month1= date.getMonth();
	let date1=date.getDate();
	if (month1==11)
		{
			if (date1==24)
				return true;
			else
				return false;
		}
	else false;
}
let date= new Date (2013, 11, 24);
console.log(timeForMilkAndCookies(date));