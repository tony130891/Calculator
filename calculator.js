const displayer = document.querySelector("#inputBox");
const btn = document.querySelectorAll("button.num");
const btnOp = document.querySelectorAll("button.operator");
const btnEqual = document.querySelector("button.equal");
const btnEraser = document.querySelector("button.eraser");
const btnDeleter = document.querySelector("button.delete");
let num1 = "";
let num2 = "";
let operators = "";

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const sum = function (arr) {
  let result = 0;
  let sum = arr.reduce((total, val) => total + val, 0);
  return sum;
  if (arr === undefined) {
    result = 0;
  }
  return result;
};

const multiply = function (...arr) {
  let result = arr.reduce((total, val) => total * val);
  return result;
};

const division = (x, y) => x / y;

function operate(num1, operators, num2) {
  if (operators === "+") {
    return add(num1, num2);
  }
  if (operators === "-") {
    return subtract(num1, num2);
  }
  if (operators === "*") {
    return multiply(num1, num2);
  }
  if (operators === "/") {
    return division(num1, num2);
  }
}

// Create the functions that populate the display when you click the number buttons. You should be storing the ‘display value’ in a variable somewhere for use in the next step.

function displayBtn() {
  let input = displayer.textContent;
  console.log(input);
}
