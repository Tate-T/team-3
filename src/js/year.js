const yearInput = document.querySelector("#yearInput");
const yearButton = document.querySelector("#yearBtn");
const yearResult = document.querySelector("#yearResult");

function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

yearButton.addEventListener("click", () => {
  const year = parseInt(yearInput.value, 10);

  if (!isNaN(year) && year > 0) {
    if (leapYear(year)) {
      yearResult.textContent = "Ви народилися у високосний рік!";
      yearResult.style.color = "green";
    } else {
      yearResult.textContent = "Ви народилися не у високосний рік!";
      yearResult.style.color = "red";
    }
  }
});
