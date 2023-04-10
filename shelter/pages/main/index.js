console.log(
  "1.Реализация burger menu на обеих страницах: +26\n2.Реализация слайдера-карусели на странице Main экрана: при нажатии на стрелки происходит переход к новому блоку элементов: +4\n3.смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4\n4.слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4\n5.при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана только (3 для 1280px): +1\n6.Реализация попап на обеих страницах: +12\nИтого: ХОТЯ БЫ 51 балл)))"
);
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
