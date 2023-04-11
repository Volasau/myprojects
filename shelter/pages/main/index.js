console.log(
  "1.Реализация burger menu на обеих страницах: +26\n2.Реализация слайдера-карусели на странице Main экрана: при нажатии на стрелки происходит переход к новому блоку элементов: +4\n3.смена блоков происходит с соответствующей анимацией карусели (способ выполнения анимации не проверяется): +4\n4.слайдер бесконечен, т.е. можно бесконечно много нажимать влево или вправо, и каждый раз будет прокрутка в эту сторону с новым набором карточек: +4\n5.при переключении влево или вправо прокручивается ровно столько карточек, сколько показывается при текущей ширине экрана только (3 для 1280px): +1\n6.Реализация попап на обеих страницах: +12\nИтого: ХОТЯ БЫ 51 балл)))"
);

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

//MODAL;
let card = document.querySelectorAll("*[data-modal-card]");
function modalWin() {
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
}
modalWin();
// MODAL

const data = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets/pets/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets/pets-sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets/pets/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets/pets/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets/pets/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets/pets/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets/pets/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets/pets/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

let arr = [];
function randomCards() {
  const shuffled = data.sort(() => 0.5 - Math.random());
  arr = shuffled.slice(0, 8);
  return arr;
}
randomCards();

let arrLeft = arr.slice(0, 3);
// console.log(arrLeft);
let arrActive = arr.slice(3, 6);
// console.log(arrActive);
let arrRight = arr.slice(6, 8);
arrRight.push(arr[4]);
// console.log(arrRight);

/////ACTIVE
let activeOneCard = document.querySelector(".cards__active1 .friend-img-1");
let activeOneCardName = document.querySelector(".cards__active1 .name-card-1");

activeOneCard.src = arrActive[0].img;
activeOneCardName.textContent = arrActive[0].name;

let activeTwoCard = document.querySelector(".cards__active1 .friend-img-2");
let activeTwoCardName = document.querySelector(".cards__active1 .name-card-2");

activeTwoCard.src = arrActive[1].img;
activeTwoCardName.textContent = arrActive[1].name;

let activeThreeCard = document.querySelector(".cards__active1 .friend-img-3");
let activeThreeCardName = document.querySelector(
  ".cards__active1 .name-card-3"
);

activeThreeCard.src = arrActive[2].img;
activeThreeCardName.textContent = arrActive[2].name;

////LEFT
let leftOneCard = document.querySelector(".cards__left1 .friend-img-1");
let leftOneCardName = document.querySelector(".cards__left1 .name-card-1");

leftOneCard.src = arrLeft[0].img;
leftOneCardName.textContent = arrLeft[0].name;

let leftTwoCard = document.querySelector(".cards__left1 .friend-img-2");
let leftTwoCardName = document.querySelector(".cards__left1 .name-card-2");

leftTwoCard.src = arrLeft[1].img;
leftTwoCardName.textContent = arrLeft[1].name;

let leftThreeCard = document.querySelector(".cards__left1 .friend-img-3");
let leftThreeCardName = document.querySelector(".cards__left1 .name-card-3");

leftThreeCard.src = arrLeft[2].img;
leftThreeCardName.textContent = arrLeft[2].name;

////RIGHT
let rightOneCard = document.querySelector(".cards__right1 .friend-img-1");
let rightOneCardName = document.querySelector(".cards__right1 .name-card-1");

rightOneCard.src = arrRight[0].img;
rightOneCardName.textContent = arrRight[0].name;

let rightTwoCard = document.querySelector(".cards__right1 .friend-img-2");
let rightTwoCardName = document.querySelector(".cards__right1 .name-card-2");

rightTwoCard.src = arrRight[1].img;
rightTwoCardName.textContent = arrRight[1].name;

let rightThreeCard = document.querySelector(".cards__right1 .friend-img-3");
let rightThreeCardName = document.querySelector(".cards__right1 .name-card-3");

rightThreeCard.src = arrRight[2].img;
rightThreeCardName.textContent = arrRight[2].name;

// SLYDER

const btnLeft = document.querySelector(".butto-1");
const btnRight = document.querySelector(".butto-2");
const carusel = document.querySelector(".carusel1");

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
  } else {
    carusel.classList.remove("transition-right");
    const itemsLeft = document.querySelector(".cards__left1").innerHTML;
    const itemsRight = document.querySelector(".cards__right1").innerHTML;
    const itemsActive = document.querySelector(".cards__active1").innerHTML;

    document.querySelector(".cards__active1").innerHTML = itemsRight;
    document.querySelector(".cards__left1").innerHTML = itemsActive;
    document.querySelector(".cards__right1").innerHTML = itemsLeft;
  }

  btnLeft.addEventListener("click", slydeLeft);
  btnRight.addEventListener("click", slydeRight);
});

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

const dataModal = [
  {
    name: "Jennifer",
    img: "../../assets/images/pets-hight500/modal/jennifer.png",
    type: "Dog",
    breed: "Labrador",
    description:
      "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    age: "2 months",
    inoculations: ["none"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Sophia",
    img: "../../assets/images/pets-hight500/modal/sophia.png",
    type: "Dog",
    breed: "Shih tzu",
    description:
      "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    age: "1 month",
    inoculations: ["parvovirus"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Woody",
    img: "../../assets/images/pets-hight500/modal/woody.png",
    type: "Dog",
    breed: "Golden Retriever",
    description:
      "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    age: "3 years 6 months",
    inoculations: ["adenovirus", "distemper"],
    diseases: ["right back leg mobility reduced"],
    parasites: ["none"],
  },
  {
    name: "Scarlett",
    img: "../../assets/images/pets-hight500/modal/scarlett.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    age: "3 months",
    inoculations: ["parainfluenza"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Katrine",
    img: "../../assets/images/pets-hight500/modal/katrine.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    age: "6 months",
    inoculations: ["panleukopenia"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Timmy",
    img: "../../assets/images/pets-hight500/modal/timmy.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    age: "2 years 3 months",
    inoculations: ["calicivirus", "viral rhinotracheitis"],
    diseases: ["kidney stones"],
    parasites: ["none"],
  },
  {
    name: "Freddie",
    img: "../../assets/images/pets-hight500/modal/freddie.png",
    type: "Cat",
    breed: "British Shorthair",
    description:
      "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    age: "2 months",
    inoculations: ["rabies"],
    diseases: ["none"],
    parasites: ["none"],
  },
  {
    name: "Charly",
    img: "../../assets/images/pets-hight500/modal/charly.png",
    type: "Dog",
    breed: "Jack Russell Terrier",
    description:
      "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    age: "8 years",
    inoculations: ["bordetella bronchiseptica", "leptospirosis"],
    diseases: ["deafness", "blindness"],
    parasites: ["lice", "fleas"],
  },
];

const activeCards = document.querySelector(".cards__active1");
const popap = document.querySelector(".pop");
const popapImg = document.querySelector(".pop__img");
const popapName = document.querySelector(".pop__name");
const popapWho = document.querySelector(".waht__pop");
const popapContent = document.querySelector(".pop__paragraf-content");
const popapAge = document.querySelector(".pop__age");
const popapInoc = document.querySelector(".pop__inoc");
const popapDis = document.querySelector(".pop__dis");
const popapParas = document.querySelector(".pop__paras");
const close = document.querySelector(".icon__close");

activeCards.addEventListener("click", (event) => {
  let pet = event.target.closest(".our__friends-card");
  if (!pet) return;

  body.classList.add("lock");
  popap.classList.add("pop__open");

  let petName = pet.children[1].textContent;
  console.log(petName);
  let cardsPets = dataModal.find(
    (_, index) => dataModal[index].name === petName
  );

  popapImg.src = cardsPets.img;
  popapName.innerHTML = cardsPets.name;
  popapWho.innerHTML = `${cardsPets.type} - ${cardsPets.breed}`;
  popapContent.innerHTML = cardsPets.description;
  popapAge.innerHTML = cardsPets.age;
  popapInoc.innerHTML = cardsPets.inoculations;
  popapDis.innerHTML = cardsPets.diseases;
  popapParas.innerHTML = cardsPets.parasites;
});

close.addEventListener("click", () => {
  body.classList.remove("lock");
  popap.classList.remove("pop__open");
});
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
