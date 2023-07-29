const displayer = document.querySelector("#inputBox");
const btn = document.querySelectorAll(".button");
const btnOp = document.querySelectorAll("button.operator");
const btnEqual = document.querySelector("button.equal");
const btnDeleter = document.querySelector("button.delete");
let string = "";

const clearContent = () => {
  string = "";
  return (displayer.value = string);
};
btn.forEach((number) => {
  number.addEventListener("click", function (e) {
    // check if the event works correctly on the target
    console.log(e.target);
    string += e.target.textContent;
    displayer.value = string;

    if (number === btnDeleter) {
      clearContent();
    }
  });
});
