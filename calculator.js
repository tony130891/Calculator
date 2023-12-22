const displayer = document.querySelector("#inputBox");
const btn = document.querySelectorAll("button.num");
const btnOp = document.querySelectorAll("button.operator");
const btnEqual = document.querySelector("button.equal");
const btnEraser = document.querySelector("button.eraser");
const btnDeleter = document.querySelector("button.delete");
const buttons = document.querySelectorAll("button");
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

function inputChanger() {
  for (let btns of buttons) {
    btns.addEventListener("click", function () {
      displayer.value += btns.textContent;
    });
  }
}

inputChanger();

// Store firstNum, operator and secondNum when the event is called so when clicking "=" the operate func is called

btnOp.forEach((signs, index) => {
  signs.addEventListener("click", function () {
    const sign = index + 1;
    switch (sign) {
      case 2:
        operators = "/";
        break;
      case 3:
        operators = "*";
        break;
      case 4:
        operators = "-";
        break;
      case 5:
        operators = "+";
        break;
      default:
        break;
    }
  });
});

btn.forEach((nums, index) => {
  nums.addEventListener("click", function () {
    const num = index + 1;
    switch (num) {
      case 1:
        num1 += "7";
        break;
      case 2:
        num1 += "8";
        break;
      case 3:
        num1 += "9";
        break;
      case 4:
        num1 += "4";
        break;
      case 5:
        num1 += "5";
        break;
      case 6:
        num1 += "6";
        break;
      case 7:
        num1 += "1";
        break;
      case 8:
        num1 += "2";
        break;
      case 9:
        num1 += "3";
        break;
      case 11:
        num1 += "0";
        break;
      default:
        console.log("no num");
    }
  });
});
