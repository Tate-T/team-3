const arrowLeft = document.querySelector("#button-arrow-left");
const arrowRight = document.querySelector("#button-arrow-right");
const image = document.querySelector(".team__img");
const name1 = document.querySelector(".team__subtitle");
const text = document.querySelector(".team__text");
const element1 = document.querySelector("#first-element");
const element2 = document.querySelector("#second-element");

arrowLeft.addEventListener("click", () => {
  if (image.src.endsWith("photo1.webp")) {
    image.src = "./img/photo1.webp";
    name1.innerHTML = "Кіріл Присакар";
    text.innerHTML =
      "Скром-майстер, виконував такі секції як: Hero, перевір в який рік народився, камінь-ножиці-папір, обидва калькулятори, наша команда та частково обери вченого";
    element1.style.width = "60px";
    element1.style.backgroundColor = "#797979";
    element2.style.width = "36px";
    element2.style.backgroundColor = "#D9D9D9";
  } else if (image.src.endsWith("photo2.webp")){
    image.src = "./img/photo1.webp";
    name1.innerHTML = "Кіріл Присакар";
    text.innerHTML =
      "Скром-майстер, виконував такі секції як: Hero, перевір в який рік народився, камінь-ножиці-папір, обидва калькулятори, наша команда та частково обери вченого";
    element1.style.width = "60px";
    element1.style.backgroundColor = "#797979";
    element2.style.width = "36px";
    element2.style.backgroundColor = "#D9D9D9";
  }
});

arrowRight.addEventListener("click", () => {
  if (image.src.endsWith("photo1.webp")) {
    image.src = "./img/photo2.webp";
    name1.innerHTML = "Іван Довгаль";
    text.innerHTML =
      "Робив такі секції як: header, вгадай число, google динозаврика, футбол, footer введіть 3 числа та частково обери вченого";
    element2.style.width = "60px";
    element2.style.backgroundColor = "#797979";
    element1.style.width = "36px";
    element1.style.backgroundColor = "#D9D9D9";
  } else if (image.src.endsWith("photo2.webp")){
    image.src = "./img/photo1.webp";
    name1.innerHTML = "Кіріл Присакар";
    text.innerHTML =
      "Скром-майстер, виконував такі секції як: Hero, перевір в який рік народився, камінь-ножиці-папір, обидва калькулятори, наша команда та частково обери вченого";
    element2.style.width = "60px";
    element2.style.backgroundColor = "#797979";
    element1.style.width = "36px";
    element1.style.backgroundColor = "#D9D9D9";
  }
});
