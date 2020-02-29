function search(nums, target) {
    var lv=nums[0],rv=nums[nums.length-1];
    var l=0,r=nums.length;
      // 6 5 2 3 4  13
      if(target < lv && target > rv) return -1;
      else {
          if(target >= lv){
              while(l < r){
                  var m = (l+r)/2;
                  m = Math.floor(m);
                  if(target == nums[m]) return m;
                  else if(nums[m]>=lv){
                      if(target>nums[m]) l=m+1;
                      else r=m;
                  }
                  else if(nums[m]<=rv) r=m;
              }
          } else if(target <= rv){
              while(l < r){
                  var m = (l+r)/2;
                  m = Math.floor(m);
                  if(target == nums[m]) return m;
                  else if(nums[m]<=rv){
                      if(target<nums[m]) r=m;
                      else l=m+1;
                  }
                  else if(nums[m]>=lv) l=m+1;
              }
          }
      }
      return -1;
  };
search([1,3],3);
