let cgpaIn = document.querySelector("#cgpa");
let button = document.querySelector("#submit");
let op = document.querySelector("#output");

function calculate() {
  let pc = (cgpaIn.value - 0.75) * 10;
  if (pc < 0 || pc > 100) {
    op.innerHTML = "Invalid Input";
  } else {
    op.innerHTML = pc;
  }
}

button.addEventListener("click", calculate);
