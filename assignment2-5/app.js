function twoSum(nums, target){
	for(let i=0;i<nums.length-1; i++){
		let j = i+1;
		while(j<nums.length){
			if(nums[i]+nums[j]==target){
				return [i,j];
			}
			j++;
		}
	}

}

console.log(twoSum([1, 1, 1, 1, 2, 7], 9));
/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/