function multiply(num1, num2) {
    let num1LastIndex = num1.length - 1;
    let num2LastIndex = num2.length - 1;
    let result = 0;

    if(num1.length > 110 || num2.length > 110 ) return "0";

        num1 = num1 * 1;

        for(let j = num2LastIndex ; j >= 0; j--) {
            result = result + (num1 * generateLeadingZeroes(num2.charAt(j) * 1, num2.length - j));
            console.log('&&&&', result);
        }
    return result+'';
};

function generateLeadingZeroes(number, length){
    for(let k = 1 ; k < length; k++){
      number *= 10;
    }
    return number;
}

console.log('>>', multiply('987654321','23456789'));
