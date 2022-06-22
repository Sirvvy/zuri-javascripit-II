const number1 = parseFloat(prompt('Enter number1: '));
const number2= parseFloat(prompt('Enter number2: '));

const operator = prompt('Enter operator(+,-,*,/)');

let result = 0;
if(isNaN(number1) || isNaN(number2)){
    alert('Input is wrong! Try again')
} else {
    if(operator === '+') {
        result = number1 + number2;
    }else if(operator === '-') {
        result = number1 + number2;
    }else if(operator === '*') {
        result = number1 + number2;
    } else if(operator === '*') {
        result = number1 + number2;
    }
    alert(number1+operator+number2+'=' + result);
}