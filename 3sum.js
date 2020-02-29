function threeSum (nums) {
    const hashMap = {};
    var resultArray = [];
    var arrayLength = nums.length;
    var isIdentical = 0;
    if(arrayLength === 0) return [];

    for(var i = 0 ; i < arrayLength; i++) {
        if(nums[i] === 0 && nums[arrayLength - 1] === 0){
            isIdentical++;
            continue;
        }
        break;
    }

    if(isIdentical === arrayLength && arrayLength >= 3 ) return [[0,0,0]];

    for(var i = 0 ; i < arrayLength; i++) {
        for(var j = i+1 ; j < arrayLength; j++){
            const addOfTwo = - (nums[i] + nums[j]);
            if(nums.includes(addOfTwo) && nums[i] != addOfTwo && nums[j] != addOfTwo){
               hashMap[Math.abs(nums[i])+ Math.abs(nums[j]) + Math.abs(addOfTwo)] = [nums[i], nums[j], addOfTwo];
            }
         }
    }

    return Object.values(hashMap);
};

threeSum([-2,0,1,1,2]);
// [[0,0,0]]
