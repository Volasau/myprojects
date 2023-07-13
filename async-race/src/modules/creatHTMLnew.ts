export function addBody() {
  const { body } = document;
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  body.appendChild(wrapper);
  wrapper.appendChild(createHeaderRace());
}

function createHeaderRace() {
  const header = document.createElement('div');
  header.classList.add('header');
  const h1 = document.createElement('h1');
  h1.textContent = 'Async-Race';
  h1.classList.add('h1__text');

  const buttoGarage = document.createElement('button');
  buttoGarage.classList.add('button__header', 'button-garage');
  buttoGarage.textContent = 'GARAGE';
  const buttoWinner = document.createElement('button');
  buttoWinner.classList.add('button__header', 'button-winner');
  buttoWinner.textContent = 'WINNERS';

  header?.appendChild(h1);
  header?.appendChild(buttoGarage);
  header?.appendChild(buttoWinner);
  return header;
}

export function creatGarage() {
  const wrapper = document.querySelector('.wrapper');
  const garageWrapper = document.createElement('div');
  garageWrapper.classList.add('garage__wrapper');
  const menuGarage = document.createElement('div');
  menuGarage.classList.add('garage__menu');
  wrapper?.append(garageWrapper);
  garageWrapper.append(menuGarage);
  menuGarage.appendChild(garageMenuCreate());
  menuGarage.appendChild(garageMenuUpdate());
  menuGarage.appendChild(garageManagment());
  garageWrapper.appendChild(addPlaceTraks());
}

function garageMenuCreate() {
  const menuCreat = document.createElement('div');
  menuCreat.classList.add('menu__create', 'menu__wrapper');
  const inputTextCreate = document.createElement('input');
  inputTextCreate.type = 'text';
  inputTextCreate.classList.add('input', 'input__create', 'input__text');

  const inputColorCreate = document.createElement('input');
  inputColorCreate.type = 'color';
  inputColorCreate.classList.add('input', 'input__create', 'input__color');

  const buttonCreate = document.createElement('button');
  buttonCreate.classList.add('btn__menu');
  buttonCreate.textContent = 'CREATE';
  menuCreat.append(inputTextCreate);
  menuCreat.append(inputColorCreate);
  menuCreat.append(buttonCreate);
  return menuCreat;
}

function garageMenuUpdate() {
  const menuUpdate = document.createElement('div');
  menuUpdate.classList.add('menu__create', 'menu__wrapper');
  const inputTextUpdate = document.createElement('input');
  inputTextUpdate.type = 'text';
  inputTextUpdate.classList.add('input', 'input__update', 'input__text');

  const inputColorUpdate = document.createElement('input');
  inputColorUpdate.type = 'color';
  inputColorUpdate.classList.add('input', 'input__update', 'input__color');

  const buttonUpdate = document.createElement('button');
  buttonUpdate.classList.add('btn__menu');
  buttonUpdate.textContent = 'UPDATE';
  menuUpdate.append(inputTextUpdate);
  menuUpdate.append(inputColorUpdate);
  menuUpdate.append(buttonUpdate);
  return menuUpdate;
}

function garageManagment() {
  const containerBtn = document.createElement('div');
  containerBtn.classList.add('container__btn-manag');

  const butnRace = document.createElement('button');
  butnRace.classList.add('btn__menu', 'btn__manag');
  butnRace.textContent = 'RACE';
  const butnReset = document.createElement('button');
  butnReset.classList.add('btn__menu', 'btn__manag');
  butnReset.textContent = 'RESET';
  const butnCenerateCar = document.createElement('button');
  butnCenerateCar.classList.add('btn__menu', 'btn__cenerate');
  butnCenerateCar.textContent = 'GENERATE CARS';

  containerBtn.appendChild(butnRace);
  containerBtn.appendChild(butnReset);
  containerBtn.appendChild(butnCenerateCar);

  return containerBtn;
}

function addPlaceTraks() {
  const placeRace = document.createElement('div');
  placeRace.classList.add('place__race');
  const pageTitle = document.createElement('h2');
  pageTitle.classList.add('page__title');
  pageTitle.textContent = 'GARAGE';
  const pageNumber = document.createElement('h3');
  pageNumber.classList.add('page__num');
  pageNumber.textContent = 'page';
  const raceTracks = document.createElement('div');
  raceTracks.classList.add('race__tracks');

  placeRace.appendChild(pageTitle);
  placeRace.appendChild(pageNumber);
  placeRace.appendChild(raceTracks);
  return placeRace;
}
