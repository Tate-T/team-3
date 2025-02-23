const imgElement = document.querySelector(".header__img");

imgElement.addEventListener("click", () => {
    const imgSrc = imgElement.src;
    const allElements = document.querySelectorAll("body *:not(button)");
    const inputElements = document.querySelectorAll("input");

    if (imgSrc.includes("light-switch.webp")) {
        imgElement.src = "../img/dark-switch.webp";
        document.body.style.backgroundColor = "#3a3a3a";

        allElements.forEach((el) => el.style.color = "white");
        inputElements.forEach((el) => el.style.color = "black");

    } else {
        imgElement.src = "../img/light-switch.webp";
        document.body.style.backgroundColor = "white";

        allElements.forEach((el) => el.style.color = "black");
        inputElements.forEach((el) => el.style.color = "white");
    }
});
