const firstInput = document.querySelector("#first");
const secondInput = document.querySelector("#second");
const resultInput = document.querySelector("#three");

const plusBtn = document.querySelector("#plus");
const multiplyBtn = document.querySelector("#multiply");
const minusBtn = document.querySelector("#minus");
const divideBtn = document.querySelector("#divide");
const resultBtn = document.querySelector("#result");

let currentOperation = null;

function plusNum(a, b) {
  return a + b;
}

function multiplyNum(a, b) {
  return a * b;
}

function minusNum(a, b) {
  return a - b;
}

function divideNum(a, b) {
  if (b === 0) {
    alert("Ділення на 0 неможливо");
    return null;
  }
  return a / b;
}

plusBtn.addEventListener("click", () => {
  currentOperation = plusNum;
});

multiplyBtn.addEventListener("click", () => {
  currentOperation = multiplyNum;
});

minusBtn.addEventListener("click", () => {
  currentOperation = minusNum;
});

divideBtn.addEventListener("click", () => {
  currentOperation = divideNum;
});

resultBtn.addEventListener("click", () => {
  const firstNum = parseFloat(firstInput.value);
  const secondNum = parseFloat(secondInput.value);
  const result = currentOperation(firstNum, secondNum);
  if (result !== null) {
    resultInput.value = result;
  }
});
