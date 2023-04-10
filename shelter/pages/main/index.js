// console.log(
//   "№1-Страница Main\n1.Вёрстка страницы Main соответствует макету при ширине экрана 1280px: +14\n2.Вёрстка страницы Main соответствует макету при ширине экрана 768px: +14\n3.Вёрстка страницы Main соответствует макету при ширине экрана 320px: +14\n4.Вёрстка страницы Pets соответствует макету при ширине экрана 1280px: +6\n5.Вёрстка страницы Pets соответствует макету при ширине экрана 768px: +6\n6.Вёрстка страницы Pets соответствует макету при ширине экрана 320px: +6\n7.Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, справа от отдельных блоков не появляются белые поля. Весь контент страницы при этом сохраняется: не обрезается и не удаляется: +20\n8.Верстка резиновая: при плавном изменении размера экрана от 1280px до 320px верстка подстраивается под этот размер, элементы верстки меняют свои размеры и расположение, не наезжают друг на друга, изображения могут менять размер, но сохраняют правильные пропорции: +8\n9.При ширине экрана меньше 768px на обеих страницах меню в хедере скрывается, появляется иконка бургер-меню: +4\n10.Верстка обеих страниц валидная: для проверки валидности вёрстки используйте сервис https://validator.w3.org/ : +8\nИтого: 100"
// );
window.onload = function () {
  alert(
    " Добрый день!\n Прошу прощения за это сообщение, но хотелось рассказать.\n Модальные окошки навешаны на все карточки, но почему-то после старта слайдера они перестают работать, решение я так и не нашел))) Нажмите на карточку до запуска слайдера и модалка сработает))\n Прошу вас не судите строго этот момент. \n Сам слайдер я смог реализовать только для 1280px c фиксированными карточками."
  );
};

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

///  SLYDER
let card = document.querySelectorAll("*[data-modal-card]");

const btnLeft = document.querySelector(".butto-1");
const btnRight = document.querySelector(".butto-2");
const carusel = document.querySelector(".carusel1");

function slydeLeft() {
  carusel.classList.add("transition-left");
  btnLeft.removeEventListener("click", slydeLeft);
  btnRight.removeEventListener("click", slydeRight);
}

function slydeRight() {
  carusel.classList.add("transition-right");
  btnLeft.removeEventListener("click", slydeRight);
  btnRight.removeEventListener("click", slydeLeft);
}

btnLeft.addEventListener("click", slydeLeft);
btnRight.addEventListener("click", slydeRight);

carusel.addEventListener("animationend", (animaitionEvenr) => {
  if (animaitionEvenr.animationName === "drive-left") {
    carusel.classList.remove("transition-left");
    const itemsLeft = document.querySelector(".cards__left1").innerHTML;
    const itemsRight = document.querySelector(".cards__right1").innerHTML;
    const itemsActive = document.querySelector(".cards__active1").innerHTML;

    document.querySelector(".cards__active1").innerHTML = itemsLeft;
    document.querySelector(".cards__left1").innerHTML = itemsRight;
    document.querySelector(".cards__right1").innerHTML = itemsActive;
    modalWin();
  } else {
    carusel.classList.remove("transition-right");
    const itemsLeft = document.querySelector(".cards__left1").innerHTML;
    const itemsRight = document.querySelector(".cards__right1").innerHTML;
    const itemsActive = document.querySelector(".cards__active1").innerHTML;

    document.querySelector(".cards__active1").innerHTML = itemsRight;
    document.querySelector(".cards__left1").innerHTML = itemsActive;
    document.querySelector(".cards__right1").innerHTML = itemsLeft;
    modalWin();
  }
  btnLeft.addEventListener("click", slydeLeft);
  btnRight.addEventListener("click", slydeRight);
});

let ykor = document.querySelector(".form__but-not-only");
function changeYkor() {
  ykor.action = "";
  if (window.innerWidth > 1200) {
    ykor.action = "http://127.0.0.1:5502/shelter/pages/main/?#our__friends1";
  } else {
    ykor.action = "http://127.0.0.1:5502/shelter/pages/main/?#our__friends";
  }
}
window.addEventListener("resize", changeYkor);

/// MODAL

function modalWin() {
  for (let i = 0; i < card.length; i++) {
    console.log(card);
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

  document.querySelectorAll(".pop .pop__card").forEach((element) => {
    element.addEventListener("click", (event) => {
      event._isClickWithInModal = true;
    });
  });
  document.querySelectorAll(".pop").forEach((element) => {
    element.addEventListener("click", (event) => {
      if (event._isClickWithInModal) return;
      event.currentTarget.classList.remove("pop__open");
      body.classList.remove("lock");
    });
  });
}
modalWin();
/// MODAL
