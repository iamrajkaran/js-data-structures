function numss(nums){
    const Map = {};
    var counter = 1;
    var max = 0;

    for( let i = 0; i < nums.length; i++){
        Map[parseInt(nums[i])] = true;
    }

    for(key in Map){
        counter = 1;
        console.log('>>>', key);
      if(!Map[parseInt(key) - 1]){
        while(Map[parseInt(key) + 1]){
           ++counter;
           key++;
        }
      }

       if(counter >= max) max = counter;
    }

    return max;
}

numss([9,1,4,7,3,-1,0,5,8,-1,6]); 
