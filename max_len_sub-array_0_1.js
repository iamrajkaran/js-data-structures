array = [0,0,0,1,0,1,0];
array_index = [];
let c_0;
let c_1;
let len = 0;
for(var i = 0; i < array.length; i++) {
     c_0 = 0; c_1 = 0;
    for(var j = i; j < array.length; j++){
            
            if(array[j] === 0) c_0 += 1;
            if(array[j] === 1) c_1 += 1;

            if(c_0 === c_1){
                if(len <= j - i + 1){
                    len = j - i + 1;
                    array_index.push([i,j+1]);
                }
            }
    }
}
console.log('len', len);
for(var j = 0; j < array_index.length; j++){
    let actual_len = array_index[j][1] - array_index[j][0];
    if(len === actual_len) {
        console.log('subset', array.slice(array_index[j][0], array_index[j][1]));
    }
}
