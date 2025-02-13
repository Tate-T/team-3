const randomNumber = Math.floor(Math.random() * 100) + 1;
function checkNumber() {
    const userGuess = Number(document.querySelector(".guess__input").value);
    const message = document.querySelector(".guess__text");

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
