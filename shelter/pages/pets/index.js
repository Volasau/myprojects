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
