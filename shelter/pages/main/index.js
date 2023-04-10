// console.log(
//   "№1-Страница Main\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2.Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3.Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8.Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8\n9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n10.Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8\nИтого: 100"
// );

/// BURGER START

const burgerItem = document.querySelector(".burger");
const menu = document.querySelector(".navigation__header");
const body = document.querySelector("body");
const links = document.querySelectorAll(".header__item");
const menuCloseRandon = document.querySelector(".navigation__header");
const shadowe = document.querySelector(".shadowe");
function burger() {
  burgerItem.addEventListener("click", () => {
    console.log("hello");
    menu.classList.toggle("navigation__header_active");
    burgerItem.classList.toggle("header__burger-open");
    body.classList.toggle("lock");
    shadowe.classList.toggle("shadowe__active");
  });

  shadowe.addEventListener("click", closeBurgerMenu);

  links.forEach((el) => {
    el.addEventListener("click", closeBurgerMenu);
  });
}
burger();

function closeBurgerMenu() {
  burgerItem.classList.remove("header__burger-open");
  menu.classList.remove("navigation__header_active");
  body.classList.remove("lock");
  shadowe.classList.remove("shadowe__active");
}

/// MODAL

let card = document.querySelectorAll("*[data-modal-card]");

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener("click", () => {
    let name = card[i].getAttribute("data-modal-card");
    let modal = document.querySelector("[data-modal-window='" + name + "']");
    modal.classList.add("pop__open");
    body.classList.add("lock");

    let close = modal.querySelector(".icon__close");
    close.addEventListener("click", () => {
      modal.classList.remove("pop__open");
      body.classList.remove("lock");
    });
  });
}

document.querySelectorAll("#pop .pop__card").forEach((element) => {
  element.addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });
});
document.querySelectorAll("#pop").forEach((element) => {
  element.addEventListener("click", (event) => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("pop__open");
    body.classList.remove("lock");
  });
});

/// MODAL
