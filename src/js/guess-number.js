const randomNumber = Math.floor(Math.random() * 100) + 1;
function checkNumber() {
    const inputField = document.querySelector(".guess__input");
    const userGuess = Number(inputField.value.trim());
    const message = document.querySelector(".guess__text");
    if (inputField.value.trim() === "") {
        message.textContent = "Будь ласка, введіть число!";
        message.style.color = "orange";
        return;
    }
    if (userGuess === randomNumber) {
        message.textContent = `Вітаю, ви вгадали число! (${randomNumber})`;
        message.style.color = "green";
    } else {
        message.textContent = `Ви програли, комп’ютер загадав (${randomNumber})`;
        message.style.color = "red";
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".guess__button");
    button.addEventListener("click", checkNumber);
});

