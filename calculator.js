const add = (...args) => args.reduce((sum, total) => sum + total, 0);

const multiplication = (...args) =>
  args.reduce((multi, total) => multi * total, 1);

const subtraction = (...args) =>
  args.reduce((subtract, current) => subtract - current);

function Divide(divident, divisor) {
  let result = divident / divisor;

  if (result < 0) {
    // Rounds the number if it is negative
    return Math.ceil(result);
  }

  return Math.floor(result);
}

const num1 = document.querySelectorAll(".keys");
let num2 = document.querySelectorAll(".keys");
let operator = document.querySelectorAll(".operators");
