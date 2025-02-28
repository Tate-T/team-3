const arrowLeft = document.querySelector("#button-arrow-left");
const arrowRight = document.querySelector("#button-arrow-right");
const image = document.querySelector(".team__img");
const name1 = document.querySelector(".team__subtitle");
const text = document.querySelector(".team__text");
const element1 = document.querySelector("#first-element");
const element2 = document.querySelector("#second-element");
const photo1 = document.querySelector("#photo1");
const photo2 = document.querySelector("#photo2");
let numbers = 1;

arrowLeft.addEventListener("click", () => {
  if (numbers === 1) {
    name1.innerHTML = "Кіріл Присакар";
    text.innerHTML =
      "Скром-майстер, виконував такі секції як: Hero, перевір в який рік народився, камінь-ножиці-папір, обидва калькулятори, наша команда та частково обери вченого";
    element1.style.width = "60px";
    element1.style.backgroundColor = "#797979";
    element2.style.width = "36px";
    element2.style.backgroundColor = "#D9D9D9";
    photo1.style.display = "inherit"
    photo2.style.display = "none"
    numbers += 1
  } else if (numbers === 2){
    name1.innerHTML = "Кіріл Присакар";
    text.innerHTML =
      "Скром-майстер, виконував такі секції як: Hero, перевір в який рік народився, камінь-ножиці-папір, обидва калькулятори, наша команда та частково обери вченого";
    element1.style.width = "60px";
    element1.style.backgroundColor = "#797979";
    element2.style.width = "36px";
    element2.style.backgroundColor = "#D9D9D9";
    photo2.style.display = "none"
    photo1.style.display = "inherit"
    numbers -= 1

  }
});

arrowRight.addEventListener("click", () => {
  if (numbers === 1) {
    name1.innerHTML = "Іван Довгаль";
    text.innerHTML =
      "Робив такі секції як: header, вгадай число, google динозаврика, футбол, footer введіть 3 числа та частково обери вченого";
    element2.style.width = "60px";
    element2.style.backgroundColor = "#797979";
    element1.style.width = "36px";
    element1.style.backgroundColor = "#D9D9D9";
    photo1.style.display = "none"
    photo2.style.display = "inherit"
    numbers += 1
  } else if (numbers === 2){
    name1.innerHTML = "Іван Довгаль";
    text.innerHTML =
      "Робив такі секції як: header, вгадай число, google динозаврика, футбол, footer введіть 3 числа та частково обери вченого";
    element2.style.width = "60px";
    element2.style.backgroundColor = "#797979";
    element1.style.width = "36px";
    element1.style.backgroundColor = "#D9D9D9";
    photo1.style.display = "none"
    photo2.style.display = "inherit"
    numbers -= 1
  }
});
