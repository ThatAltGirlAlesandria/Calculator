function add(number1, number2){
  return number1 + number2;
}

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

function calc (number1, number2){
  return number1 + number2;
}

let number1 = parseInt(prompt("Please Enter Your First Number:"));
let number2 = parseInt(prompt("Please Enter Your Second Number:"));

let addition = number1.toString() + " + " + number2.toString() + " = " + add(number1,number2).toString();
let subtraction = number1.toString() + " - " + number2.toString() + " = " + subtract(number1,number2).toString();
let multiplication = number1.toString() + " X " + number2.toString() + " = " + multiply(number1,number2).toString();
let divison = number1.toString() + " / " + number2.toString() + " = " + divide(number1,number2).toString();

window.alert (addition + "\n" + subtraction + "\n" + multiplication + "\n" + divison);






/*
let number1 = parseInt(prompt("Please Enter Your First Number:"));
let number2 = parseInt(prompt("Please Enter Your Second Number:"));

let return = add(number1, number2);
let return = subtract(number1, number2);
let return = multiply(number1, number2);
let return = divide(number1, number2);
window.alert("Your new number is " + newNum);


function subtract(num1, num2) {
  return num1 - num2;
}

let num1 = prompt("Enter a number:");
let num2 = prompt("Enter another number:");
let result = subtract(num1, num2);
window.alert("Your new number is " + result);

function multiply(numbers1, numbers2) {
    return numbers1 * numbers2;
  }
  
  let numbers1 = prompt("Enter a number:");
  let numbers2 = prompt("Enter another number:");
  let numbers3 = multiply(numbers1, numbers2)
  window.alert("Your new number is " + numbers3)


function divide(numero1, numero2){
    return numero1 / numero2;
  }
  
  let numero1 = prompt("Enter a Number:");
  let numero2 = prompt("Enter a Number:");
  let newNumber = divide(numero1, numero2)
  
  window.alert("Your new number is " + newNumber)*/