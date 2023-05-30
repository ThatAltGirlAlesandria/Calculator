function add (number1, number2){
  return number1 + number2;
}

let number1 = parseInt(prompt("Please Enter Your First Number:"));
let number2 = parseInt(prompt("Please Enter Your Second Number:"));

let newNum = add(number1, number2);
window.alert("Your new number is " + newNum);


function subtract(num1, num2) {
  return num1 - num2;
}

let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");
let result = subtract(num1, num2);
window.alert("Your new number is " + result);

function mulitply(numbers1, numbers2) {
    return numbers1 * numbers2;
  }
  
  let numbers1 = prompt("Enter a number:");
  let numbers2 = prompt("Enter another number:");
  let numbers 3 = multiply(numbers1,numbers2)
  window.alert("Your new number is" + numbers3)

  function divide(numero1, numero2){
    return numero1 / numero2;
  }
  
  let numero1 = parseInt(prompt("Please Enter Your First Number:"));
  let numero2 = parseInt(prompt("Please Enter Your Second Number:"));
  
  window.alert(divide(numero1, numero2));