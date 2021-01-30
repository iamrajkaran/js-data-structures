// Find possible paths in 2D array from top left to right bottom and get minimum element in that path and in the end get max of all minimas. 
Condition: Move right or botton
Ex -
7 -> 5 -> 3 -> 9 -> 9 : 3
7 -> 2 -> 0 -> 9 -> 9 : 0
Result [3,0] -> 3

const a =  [[7,5,3],
            [2,0,9],
            [4,5,9]];
let minValue = Infinity;

const result = [];
const rowLength = a.length;
const colLength = a[0].length;

function recursive(i, j, minValue) {
    if (i > rowLength - 1 || j > colLength - 1) {
        return;
    }
    
    minValue = Math.min(minValue, a[i][j]);
    
     if (i === rowLength - 1 && j === colLength - 1) {
        result.push(minValue);
        return;
    }
    
    recursive(i+1, j, minValue);
    recursive(i, j+1, minValue);
    
}

recursive(0, 0, minValue);
console.log(result);

console.log(Math.max(...result));
