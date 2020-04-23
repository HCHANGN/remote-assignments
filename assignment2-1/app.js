function max(numbers){
	let maxValue=numbers[0];
	for(let i=0;i<numbers.length;i++){
		if(numbers[i]>maxValue){
			maxValue=numbers[i];
		}
	}
	return maxValue;
}
max([1,2,4,5]);
max([5,2,7,1,6]);