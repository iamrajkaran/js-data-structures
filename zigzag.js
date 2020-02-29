function convert(s, numRows) {
  var arr = [];
  var length = s.length;
  var down = true;
  var row = 0;
  var result = '';

  if(numRows === 1 || (length === 1))
    return s;

  for(var i = 0 ;i < length; i++){
    if(!arr[row])
      arr[row] = '';

    arr[row] += s[i];

    if(row == 0){
      down = true;
    }

    if(row == (numRows -1)){
      down = false;
    }
    down?row++:row--;
  }

  for(var i = 0 ;i < arr.length; i++){
    result += arr[i];
  }
  return result;
};


convert('paypal', 3);
