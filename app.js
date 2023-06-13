const numberBtns = document.querySelectorAll(".number");
const operationBtn = document.querySelectorAll(".operation");
const deleteBtn = document.querySelector(".delete-btn");
const resetBtn = document.querySelector(".reset-btn");
const topOpperand = document.querySelector(".top-opperand");
const bottomOpperand = document.querySelector(".bottom-opperand");
const equalsBtn = document.querySelector(".equals-btn");

numberBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    appendNum(btn.innerText);
  });
});

operationBtn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    appendOperation(btn.innerText);
  });
});

equalsBtn.addEventListener("click", () => {
  let op = topOpperand.innerText.slice(-1);
  compute(op);
  topOpperand.innerHTML = "";
});

deleteBtn.addEventListener("click", function () {
  bottomOpperand.innerHTML = bottomOpperand.innerHTML.slice(0, -1);
});

resetBtn.addEventListener("click", function () {
  topOpperand.innerHTML = "";
  bottomOpperand.innerHTML = "";
});

function appendNum(num) {
  if (bottomOpperand.innerHTML.includes(".") && num === ".") {
    return "";
  }

  bottomOpperand.innerHTML += num;
}

function appendOperation(operation) {
  if (topOpperand.innerHTML && operation && bottomOpperand.innerHTML) {
    compute(operation);
  }
  if (bottomOpperand.innerHTML) {
    topOpperand.innerHTML = `${bottomOpperand.innerHTML} ${operation}`;
    bottomOpperand.innerHTML = "";
  }
}

function compute(op) {
  let topValue = parseFloat(topOpperand.innerHTML);
  let bottomValue = parseFloat(bottomOpperand.innerHTML);

  switch (op) {
    case "+":
      bottomOpperand.innerHTML = topValue + bottomValue;

      break;
    case "-":
      bottomOpperand.innerHTML = topValue - bottomValue;
      break;
    case "/":
      bottomOpperand.innerHTML = topValue / bottomValue;
      break;
    case "*":
      bottomOpperand.innerHTML = topValue * bottomValue;
  }
}
