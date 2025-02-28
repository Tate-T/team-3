document.addEventListener("DOMContentLoaded", function () {
    const imgLight = document.querySelector(".header__img1");
    const imgDark = document.querySelector(".header__img2");
    
    imgDark.style.display = "none";
    
    const toggleTheme = () => {
        const allElements = document.querySelectorAll("body *:not(button)");
        const inputElements = document.querySelectorAll("input");
        
        if (imgLight.style.display !== "none") {
            imgLight.style.display = "none";
            imgDark.style.display = "block";
            document.body.style.backgroundColor = "#3a3a3a";
            allElements.forEach((el) => el.style.color = "white");
            inputElements.forEach((el) => el.style.color = "black");
        } else {
            imgLight.style.display = "block";
            imgDark.style.display = "none";
            document.body.style.backgroundColor = "white";
            allElements.forEach((el) => el.style.color = "black");
            inputElements.forEach((el) => el.style.color = "white");
        }
    };
    
    imgLight.addEventListener("click", toggleTheme);
    imgDark.addEventListener("click", toggleTheme);
});
