function bracketMatch(text){
  var textArray = text.split('');
  console.log('>>textArray', textArray);
  var stack = [];
  stack.push(textArray[0]);
  for(let i = 1 ; i < textArray.length; i++){
     if(textArray[i] !== stack[stack.length - 1] && stack.length > 0){
         stack.pop();
         continue;
     }
     stack.push(textArray[i]);
  }
  return stack.length;
}

console.log(bracketMatch('()()()))'));
