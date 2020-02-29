function removeDuplicates(nums) {
let counter = 1;
let i;
    if(nums.length === 0) return [];

  for(i = 0 ; i < nums.length - 1; i++){
      if(nums[i] !== nums[i+1]){
          counter++;
      } else if(nums[i] === nums[i+1]){
          continue;
      }
  }
    return counter;
};

console.log(removeDuplicates([1,1,2]));
