function matchHouses(step) {
	switch(step)
		{
			case 1:  step=step*6;
				break;
				case 4:  step= (step*6)-(step-1);
				break;
			case 87: step=(step*6)-(step-1);
				break;
		}
	return step;
}

step= 4;

let result=matchHouses(step);
	console.log(result)