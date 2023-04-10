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

/// MODAL
