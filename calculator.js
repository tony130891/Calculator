const displayer = document.querySelector("#inputBox");
const btn = document.querySelectorAll(".button");
const btnOp = document.querySelectorAll("button.operator");
const btnEqual = document.querySelectorAll("button.equal");
let string = "";

btn.forEach((number) => {
  number.addEventListener("click", function (e) {
      // check if the event works correctly on the target
    console.log(e.target);
    string += e.target.textContent;
    displayer.value = string;
  });
});
