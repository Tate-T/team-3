const imgElement = document.querySelector(".header__img");
imgElement.addEventListener("click", (e) => {
    const imgSrc = imgElement.src;
    if (imgSrc.includes("light-switch.webp")) {
        imgElement.src = "../img/dark-switch.webp";
        document.body.style.backgroundColor = "#120214"
        const allElements = document.querySelectorAll("*");
        allElements.forEach((el) => { 
            el.style.color = "white"; 
        });
        const inputElements = document.querySelectorAll("input")
        inputElements.forEach((el) => {
            el.style.color = "black"; 
        })

        
        
    } else {
        imgElement.src = "../img/light-switch.webp";
        document.body.style.backgroundColor = "white"
        allElements.forEach((el) => { 
            el.style.color = "black"; 
        });
    }
        inputElements.forEach((el) => {
            el.style.color = "white"; 
        })
});

