function traverse(array, k){
var g = array.map((arr) => arr.slice() );

var rowLength = array.length;
var columnLength = array[0].length;

while(k-- !== 0) {
    for(var i = 0; i< rowLength;i++){
        for(var j = 0; j<columnLength; j++){
            if(i === rowLength-1 && j === columnLength-1){
				g[0][0] = array[i][j];
            }else if(j === columnLength - 1){
				g[i+1][0] = array[i][j];
            }else {
				g[i][j+1] = array[i][j];
            }
        }
    }
}
console.log('Array value ', g);
}

var array = [
[2,3,4],
[1,5,9],
[7,8,3]
];

traverse(array, 4);
