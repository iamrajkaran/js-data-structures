function search(nums, target) {
   if(nums.length === 0) return -1;

    if(nums.length === 1 && nums[0] === target) return 0;

    let low = 0;
    let high = nums.length -1;
    let mid = Math.floor((low + high) /2);
    // s[4,5,6,7,0,1,2],0
    if(target >= nums[low]) {
        high = mid;

        mid = Math.floor((low + high) /2);

        if(nums[mid] === target) return mid;

        while(low < high){
            high = mid;

            mid = Math.floor((low + high) /2);

            if(nums[mid] === target) return mid;

        }
        // s[4,5,6,7,0,1,2],0
    } else if(target <= nums[high]) {
        low = mid +1;

        mid = Math.floor((low + high) /2);

        if(nums[mid] === target) return mid;

        while(low < high){
            if(nums[low] === target) return low;

            low = mid + 1;

            mid = Math.floor((low + high) /2);

            if(nums[mid] === target) return mid;
        }
    }
    return -1;
  };
search([4,0,2,3],2);
