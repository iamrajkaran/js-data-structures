Board = 	 [ ['A','B','C','D'],
                   ['P','Q','R','S'],
                   ['U','V','X','Y'] ];

string = 'RSY';


for(let i =0 ; i < Board.length; i++){
	for(let j =0 ; j < Board[i].length; j++){
		if(Board[i][j] === string[0]
		&& dfs(Board, string, i, j, 0)){
			console.log('milgaya');
		}

	}
// 	console.log('nahi milga');
}
console.log('nahi milga');

function dfs(Board, string, i, j, count){
if(count === string.length){
    return true;
}

if ( i < 0 ||
    i >= Board.length ||
    j < 0 ||
    j >=Board[i].length ||
    Board[i][j] != string[count] ){

    return false;
}

let temp = Board[i][j];
Board[i][j] = ' ';

let found = dfs(Board, string, i+1, j, count+1) ||
		    dfs(Board, string, i-1, j, count+1) ||
		    dfs(Board, string, i, j+1, count+1) ||
		    dfs(Board, string, i, j-1, count+1);

Board[i][j] = temp;

return found;
}
