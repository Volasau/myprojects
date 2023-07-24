import { Car, Winner } from './dataBase';
import { getCarsList, getWinners } from './apiREST';
import {
  handleCarRemoval,
  handleUpdateClick,
  handleCreateCar,
  handleStartClick,
  getInfoCar,
  startRace,
  handleStopClick,
  stopRace,
  generateCars,
} from './carActions';

export function addBody() {
  const { body } = document;
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  body.appendChild(wrapper);
  wrapper.appendChild(createHeaderRace());
  creatGarage();
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
  buttoGarage.addEventListener('click', function () {
    const wrapperWinners = document.querySelector('.wrapper__winners');
    if (wrapperWinners instanceof Node && wrapperWinners.parentNode) {
      wrapperWinners.parentNode.removeChild(wrapperWinners);
    }
    const garageWrapper = document.querySelector('.garage__wrapper');
    if (!garageWrapper) {
      creatGarage();
    }
  });

  const buttoWinner = document.createElement('button');
  buttoWinner.classList.add('button__header', 'button-winner');
  buttoWinner.textContent = 'WINNERS';
  buttoWinner.addEventListener('click', function () {
    const garageWrapper = document.querySelector('.garage__wrapper');
    if (garageWrapper instanceof Node && garageWrapper.parentNode) {
      garageWrapper.parentNode.removeChild(garageWrapper);
    }
    const wrapperWinners = document.querySelector('.wrapper__winners');
    if (!wrapperWinners) {
      creatWinners();
      // populateWinnersTable();
    }
  });

  header.appendChild(h1);
  header.appendChild(buttoGarage);
  header.appendChild(buttoWinner);

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
  // menuGarage.appendChild(garageMenuUpdate());
  menuGarage.appendChild(garageManagment());
  getCarsList()
    .then((cars) => {
      garageWrapper.appendChild(addPlaceTraks(cars));
      garageWrapper.appendChild(addBtnPagination());
    })
    .catch((/*error*/) => {
      // console.log('Произошла ошибка при получении списка машин:', error);
    });
}

function garageMenuCreate() {
  const menuCreat = document.createElement('div');
  menuCreat.classList.add('menu__create', 'menu__wrapper');
  const inputTextCreate = document.createElement('input');
  inputTextCreate.type = 'text';
  inputTextCreate.classList.add(
    'input',
    'input__create',
    'input__text',
    'input__creat-text'
  );

  const inputColorCreate = document.createElement('input');
  inputColorCreate.type = 'color';
  inputColorCreate.value = '#00ff00';
  inputColorCreate.classList.add(
    'input',
    'input__create',
    'input__color',
    'input__creat-color'
  );

  const buttonCreate = document.createElement('button');
  buttonCreate.classList.add('btn__menu', 'btn', 'btn__create');
  buttonCreate.textContent = 'CREATE';
  buttonCreate.addEventListener('click', handleCreateCar);

  menuCreat.append(inputTextCreate);
  menuCreat.append(inputColorCreate);
  menuCreat.append(buttonCreate);
  return menuCreat;
}

function garageMenuUpdate() {
  const menuUpdate = document.createElement('div');
  menuUpdate.classList.add('menu__update', 'menu__wrapper');

  const inputTextUpdate = document.createElement('input');
  inputTextUpdate.type = 'text';
  inputTextUpdate.classList.add('input', 'input__update', 'input__text');

  const inputColorUpdate = document.createElement('input');
  inputColorUpdate.type = 'color';
  inputColorUpdate.classList.add('input', 'input__update', 'input__color');

  const buttonUpdate = document.createElement('button');
  buttonUpdate.classList.add('btn__menu', 'btn', 'btn__update');
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
  butnRace.classList.add('btn__menu', 'btn__manag', 'btn', 'btn__race');
  butnRace.textContent = 'RACE';

  butnRace.addEventListener('click', startRace);

  const butnReset = document.createElement('button');
  butnReset.classList.add('btn__menu', 'btn__manag', 'btn', 'btn__reset');
  butnReset.setAttribute('disabled', 'disabled');
  butnReset.textContent = 'RESET';

  butnReset.addEventListener('click', stopRace);

  const butnCenerateCar = document.createElement('button');
  butnCenerateCar.classList.add('btn__menu', 'btn__cenerate', 'btn');
  butnCenerateCar.textContent = 'GENERATE CARS';

  butnCenerateCar.addEventListener('click', generateCars);

  containerBtn.appendChild(butnRace);
  containerBtn.appendChild(butnReset);
  containerBtn.appendChild(butnCenerateCar);

  return containerBtn;
}

export function addPlaceTraks(cars: Car[]) {
  const placeRace = document.createElement('div');
  placeRace.classList.add('place__race');
  const pageTitle = document.createElement('h2');
  pageTitle.classList.add('page__title');
  pageTitle.textContent = `GARAGE (${cars.length})`;
  const pageNumber = document.createElement('h3');
  pageNumber.classList.add('page__num');
  pageNumber.textContent = 'page #1';
  const raceTracks = document.createElement('div');
  raceTracks.classList.add('race__tracks');

  placeRace.appendChild(pageTitle);
  placeRace.appendChild(pageNumber);
  placeRace.appendChild(raceTracks);
  // console.log(cars.length);
  cars.forEach((car) => {
    const track = createTraks(car);
    raceTracks.appendChild(track);
  });
  return placeRace;
}

function addBtnPagination() {
  const pagination = document.createElement('div');
  pagination.classList.add('wrapper__pagination');
  const btnPrev = document.createElement('button');
  btnPrev.classList.add('button__prev', 'btn__pagination', 'btn');
  btnPrev.textContent = 'PREV';
  const btnNext = document.createElement('button');
  btnNext.classList.add('button__next', 'btn__pagination', 'btn');
  btnNext.textContent = 'NEXT';

  pagination.appendChild(btnNext);
  pagination.appendChild(btnPrev);
  return pagination;
}

function createTraks(car: Car) {
  const wrapperCar = document.createElement('div');
  wrapperCar.classList.add('section__car');
  wrapperCar.id = `${car.id}`;
  const headerTrak = document.createElement('div');
  headerTrak.classList.add('header__trak');

  const btnSelect: HTMLButtonElement = document.createElement('button');
  btnSelect.classList.add('btn__car', 'btn__select', 'btn', 'btn__car-menu');
  btnSelect.setAttribute('data-select', `${car.id}-select`);
  btnSelect.textContent = 'SELECT';

  let isMenuUpdateOpen = false;

  btnSelect.addEventListener('click', () => {
    if (!isMenuUpdateOpen) {
      const menuUpdate: HTMLDivElement = garageMenuUpdate();
      getInfoCar(menuUpdate, btnSelect);
      if (menuUpdate) {
        const buttonUpdate: HTMLButtonElement | null =
          menuUpdate.querySelector('.btn__update');
        if (buttonUpdate) {
          buttonUpdate.addEventListener(
            'click',
            handleUpdateClick(btnSelect, menuUpdate, wrapperCar)
          );
        }

        headerTrak.appendChild(menuUpdate);
        isMenuUpdateOpen = true;
      }
    }
  });

  const btnRemove = document.createElement('button');
  btnRemove.classList.add('btn__car', 'btn__remove', 'btn', 'btn__car-menu');
  btnRemove.setAttribute('data-remove', `${car.id}-remove`);
  btnRemove.textContent = 'REMOVE';

  btnRemove.addEventListener('click', async () => {
    await handleCarRemoval(car.id.toString(), wrapperCar);
  });

  const nameCar = document.createElement('div');
  nameCar.classList.add('name__car');
  nameCar.textContent = car.name;

  headerTrak.appendChild(btnSelect);
  headerTrak.appendChild(btnRemove);
  headerTrak.appendChild(nameCar);

  const motorTrak = document.createElement('div');
  motorTrak.classList.add('motor__trak');
  const btnStar = document.createElement('button');
  btnStar.classList.add('btn__start', 'btn__motor', 'btn__car');
  btnStar.setAttribute('data-start', `${car.id}-start`);

  //////////////////////////////////////////////////----------------------------/
  btnStar.setAttribute('data-car-id', `${car.id}`);
  //////////////////////////////////////////////////----------------------------/
  btnStar.textContent = 'A';
  //////////////////////////////////////////////////////////////////////////////START
  btnStar.addEventListener('click', () => {
    const carId = car.id;
    handleStartClick(carId.toString());
  });

  const btnStop = document.createElement('button');
  btnStop.classList.add('btn__stop', 'btn__motor', 'btn__car');
  // btnStop.classList.add('disabled');
  btnStop.setAttribute('data-stop', `${car.id}-stop`);
  btnStop.setAttribute('data-car-id', `${car.id}`);

  btnStop.setAttribute('disabled', 'disabled');
  btnStop.textContent = 'B';

  btnStop.addEventListener('click', () => {
    const carId = car.id;
    handleStopClick(carId.toString());
  });

  motorTrak.appendChild(btnStar);
  motorTrak.appendChild(btnStop);

  const roadTrak = document.createElement('div');
  roadTrak.classList.add('road');

  const carElement = createCar(car);
  const finish = document.createElement('div');
  finish.classList.add('finish');
  const flag = document.createElement('img');
  flag.classList.add('flag');
  flag.src = '../assets/Flag.png';
  finish.appendChild(flag);

  roadTrak.appendChild(carElement);
  roadTrak.appendChild(finish);

  wrapperCar.appendChild(headerTrak);
  wrapperCar.appendChild(motorTrak);
  wrapperCar.appendChild(roadTrak);

  return wrapperCar;
}

/////////////////////////////////////////////////////

///////////////////////////////////////////////////

function createCar(car: Car) {
  const wrapperCar = document.createElement('div');
  wrapperCar.classList.add('wrapper__car');
  wrapperCar.innerHTML = `<svg 
  id = "${car.id}-User"
  class="car"
  width="95"
  height="90"
  version="1.0" xmlns="http://www.w3.org/2000/svg"
   width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"
   preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.15, written by Peter Selinger 2001-2017
  </metadata>
  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
  fill=${car.color} stroke="#dae8ec">
  <path d="M3780 5409 c-108 -13 -241 -53 -350 -106 -201 -99 -336 -288 -444
  -618 -30 -93 -64 -224 -82 -312 -2 -12 -14 -28 -27 -34 -12 -6 -38 -26 -57
  -44 l-35 -33 -180 -6 c-563 -21 -838 -78 -1200 -250 -440 -210 -760 -508
  -1099 -1023 -37 -56 -118 -161 -181 -232 -62 -72 -117 -141 -120 -152 -4 -11
  -4 -36 0 -55 10 -56 35 -60 139 -24 49 16 91 29 92 27 2 -1 -7 -36 -18 -77
  -18 -63 -22 -102 -22 -250 0 -149 3 -186 21 -252 108 -385 413 -688 808 -803
  332 -96 665 -65 976 91 174 87 362 258 460 418 l51 84 56 6 c31 3 111 6 177 7
  l120 1 3 -56 c4 -66 -12 -59 187 -81 315 -33 338 -34 1730 -75 537 -16 998
  -29 1350 -40 637 -20 1347 -30 2215 -32 856 -2 891 -1 1065 20 141 17 234 22
  425 22 l245 -1 32 -47 c93 -136 270 -281 447 -367 490 -239 1075 -150 1451
  219 45 44 108 118 139 163 56 80 59 83 97 83 44 0 46 5 22 54 -14 31 -15 41
  -4 73 56 167 72 255 72 407 0 215 -65 420 -194 611 -99 147 -314 326 -481 401
  -53 24 -68 36 -82 66 -29 65 -66 91 -133 96 l-59 4 -101 224 c-56 123 -101
  230 -101 239 0 22 -39 101 -58 118 -36 30 -98 39 -437 57 -192 11 -433 24
  -535 30 -102 6 -264 15 -360 20 -203 12 -446 26 -680 40 -91 6 -239 15 -330
  20 -200 12 -434 27 -635 40 -263 17 -798 50 -853 53 l-53 2 -169 393 c-134
  309 -168 397 -161 415 4 12 6 29 3 37 -15 47 -119 117 -245 165 -172 64 -837
  168 -1407 219 -518 47 -1274 70 -1490 45z m1935 -805 c311 -25 693 -77 782
  -105 70 -22 93 -107 93 -348 l0 -181 -199 0 c-232 0 -238 2 -203 73 18 36 19
  49 11 89 -9 41 -15 48 -43 58 -18 6 -40 8 -48 5 -14 -5 -99 -100 -166 -184
  l-19 -25 -199 12 c-399 25 -808 53 -812 57 -7 6 19 218 33 277 38 166 124 266
  246 287 64 12 276 6 524 -15z m-4716 -2257 c141 -40 159 -61 45 -51 -60 5 -89
  13 -121 33 -24 14 -43 32 -43 39 0 6 1 12 3 12 1 -1 53 -15 116 -33z m-102
  -94 c2 -6 -3 -13 -12 -16 -10 -5 -15 0 -15 14 0 21 21 22 27 2z m218 -110 c6
  -25 1 -34 -45 -74 -50 -46 -84 -59 -152 -59 -23 0 -29 6 -37 38 -18 64 -15 77
  27 92 50 20 87 27 148 29 49 1 52 -1 59 -26z m691 -23 c60 -17 133 -40 163
  -52 l53 -21 -6 -41 c-4 -22 -9 -42 -11 -44 -2 -3 -50 1 -107 8 -103 12 -112
  16 -210 81 -8 5 -1 99 6 99 2 0 52 -14 112 -30z m-581 -130 c18 -20 18 -23 -5
  -93 -17 -55 -37 -90 -83 -144 -33 -40 -63 -73 -66 -73 -10 0 -51 57 -51 70 0
  6 12 51 26 99 26 87 27 88 83 124 66 42 72 43 96 17z m452 -52 c28 -29 76 -93
  108 -142 l57 -89 -39 -39 -39 -39 -87 88 c-66 67 -93 103 -114 152 l-27 63 35
  29 c18 16 39 29 44 29 6 0 34 -24 62 -52z m-680 -53 c-12 -36 -24 -65 -28 -65
  -3 0 -18 26 -32 58 -30 65 -26 70 45 71 l36 1 -21 -65z m455 -30 c11 -42 17
  -102 17 -198 l1 -138 -57 3 -58 3 -19 136 -19 136 24 62 c24 61 25 62 59 59
  34 -3 36 -5 52 -63z m438 50 c94 -11 93 -10 69 -58 -32 -62 -59 -98 -70 -91
  -11 6 -109 150 -109 159 0 4 12 4 28 1 15 -3 52 -8 82 -11z m-615 -264 c5 -66
  4 -91 -4 -91 -14 0 -98 42 -124 62 -18 13 -15 19 45 89 73 87 71 88 83 -60z
  m430 -52 c-7 -10 -132 -59 -153 -59 -15 0 -17 11 -14 117 l3 116 84 -83 c46
  -46 82 -87 80 -91z m145 98 c0 -2 -17 -19 -37 -38 l-38 -34 34 38 c33 34 41
  42 41 34z m9380 -202 l0 -75 -75 0 -75 0 0 70 0 69 73 4 c39 1 73 4 75 5 1 1
  2 -32 2 -73z m198 36 l31 -39 -49 -21 c-27 -12 -62 -24 -77 -27 l-28 -6 3 66
  4 66 42 0 c38 0 46 -5 74 -39z m132 24 c-7 -8 -18 -15 -25 -15 -7 0 -18 7 -25
  15 -11 13 -7 15 25 15 32 0 36 -2 25 -15z m-765 -15 c-13 -15 -22 -17 -36 -10
  -35 19 -31 30 12 30 41 0 42 0 24 -20z m215 1 c0 -10 -3 -38 -6 -63 -6 -45 -7
  -45 -38 -38 -39 10 -126 41 -126 45 0 2 14 19 32 39 29 33 36 36 85 36 45 0
  53 -3 53 -19z"/>
  </g>
  </svg>`;
  return wrapperCar;
}

export const createCarSmall = (color: string) =>
  `<svg 
  class="car"
  width="55"
  height="50"
  version="1.0" xmlns="http://www.w3.org/2000/svg"
   width="1280.000000pt" height="1280.000000pt" viewBox="0 0 1280.000000 1280.000000"
   preserveAspectRatio="xMidYMid meet">
  <metadata>
  Created by potrace 1.15, written by Peter Selinger 2001-2017
  </metadata>
  <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
  fill=${color} stroke="#dae8ec">
  <path d="M3780 5409 c-108 -13 -241 -53 -350 -106 -201 -99 -336 -288 -444
  -618 -30 -93 -64 -224 -82 -312 -2 -12 -14 -28 -27 -34 -12 -6 -38 -26 -57
  -44 l-35 -33 -180 -6 c-563 -21 -838 -78 -1200 -250 -440 -210 -760 -508
  -1099 -1023 -37 -56 -118 -161 -181 -232 -62 -72 -117 -141 -120 -152 -4 -11
  -4 -36 0 -55 10 -56 35 -60 139 -24 49 16 91 29 92 27 2 -1 -7 -36 -18 -77
  -18 -63 -22 -102 -22 -250 0 -149 3 -186 21 -252 108 -385 413 -688 808 -803
  332 -96 665 -65 976 91 174 87 362 258 460 418 l51 84 56 6 c31 3 111 6 177 7
  l120 1 3 -56 c4 -66 -12 -59 187 -81 315 -33 338 -34 1730 -75 537 -16 998
  -29 1350 -40 637 -20 1347 -30 2215 -32 856 -2 891 -1 1065 20 141 17 234 22
  425 22 l245 -1 32 -47 c93 -136 270 -281 447 -367 490 -239 1075 -150 1451
  219 45 44 108 118 139 163 56 80 59 83 97 83 44 0 46 5 22 54 -14 31 -15 41
  -4 73 56 167 72 255 72 407 0 215 -65 420 -194 611 -99 147 -314 326 -481 401
  -53 24 -68 36 -82 66 -29 65 -66 91 -133 96 l-59 4 -101 224 c-56 123 -101
  230 -101 239 0 22 -39 101 -58 118 -36 30 -98 39 -437 57 -192 11 -433 24
  -535 30 -102 6 -264 15 -360 20 -203 12 -446 26 -680 40 -91 6 -239 15 -330
  20 -200 12 -434 27 -635 40 -263 17 -798 50 -853 53 l-53 2 -169 393 c-134
  309 -168 397 -161 415 4 12 6 29 3 37 -15 47 -119 117 -245 165 -172 64 -837
  168 -1407 219 -518 47 -1274 70 -1490 45z m1935 -805 c311 -25 693 -77 782
  -105 70 -22 93 -107 93 -348 l0 -181 -199 0 c-232 0 -238 2 -203 73 18 36 19
  49 11 89 -9 41 -15 48 -43 58 -18 6 -40 8 -48 5 -14 -5 -99 -100 -166 -184
  l-19 -25 -199 12 c-399 25 -808 53 -812 57 -7 6 19 218 33 277 38 166 124 266
  246 287 64 12 276 6 524 -15z m-4716 -2257 c141 -40 159 -61 45 -51 -60 5 -89
  13 -121 33 -24 14 -43 32 -43 39 0 6 1 12 3 12 1 -1 53 -15 116 -33z m-102
  -94 c2 -6 -3 -13 -12 -16 -10 -5 -15 0 -15 14 0 21 21 22 27 2z m218 -110 c6
  -25 1 -34 -45 -74 -50 -46 -84 -59 -152 -59 -23 0 -29 6 -37 38 -18 64 -15 77
  27 92 50 20 87 27 148 29 49 1 52 -1 59 -26z m691 -23 c60 -17 133 -40 163
  -52 l53 -21 -6 -41 c-4 -22 -9 -42 -11 -44 -2 -3 -50 1 -107 8 -103 12 -112
  16 -210 81 -8 5 -1 99 6 99 2 0 52 -14 112 -30z m-581 -130 c18 -20 18 -23 -5
  -93 -17 -55 -37 -90 -83 -144 -33 -40 -63 -73 -66 -73 -10 0 -51 57 -51 70 0
  6 12 51 26 99 26 87 27 88 83 124 66 42 72 43 96 17z m452 -52 c28 -29 76 -93
  108 -142 l57 -89 -39 -39 -39 -39 -87 88 c-66 67 -93 103 -114 152 l-27 63 35
  29 c18 16 39 29 44 29 6 0 34 -24 62 -52z m-680 -53 c-12 -36 -24 -65 -28 -65
  -3 0 -18 26 -32 58 -30 65 -26 70 45 71 l36 1 -21 -65z m455 -30 c11 -42 17
  -102 17 -198 l1 -138 -57 3 -58 3 -19 136 -19 136 24 62 c24 61 25 62 59 59
  34 -3 36 -5 52 -63z m438 50 c94 -11 93 -10 69 -58 -32 -62 -59 -98 -70 -91
  -11 6 -109 150 -109 159 0 4 12 4 28 1 15 -3 52 -8 82 -11z m-615 -264 c5 -66
  4 -91 -4 -91 -14 0 -98 42 -124 62 -18 13 -15 19 45 89 73 87 71 88 83 -60z
  m430 -52 c-7 -10 -132 -59 -153 -59 -15 0 -17 11 -14 117 l3 116 84 -83 c46
  -46 82 -87 80 -91z m145 98 c0 -2 -17 -19 -37 -38 l-38 -34 34 38 c33 34 41
  42 41 34z m9380 -202 l0 -75 -75 0 -75 0 0 70 0 69 73 4 c39 1 73 4 75 5 1 1
  2 -32 2 -73z m198 36 l31 -39 -49 -21 c-27 -12 -62 -24 -77 -27 l-28 -6 3 66
  4 66 42 0 c38 0 46 -5 74 -39z m132 24 c-7 -8 -18 -15 -25 -15 -7 0 -18 7 -25
  15 -11 13 -7 15 25 15 32 0 36 -2 25 -15z m-765 -15 c-13 -15 -22 -17 -36 -10
  -35 19 -31 30 12 30 41 0 42 0 24 -20z m215 1 c0 -10 -3 -38 -6 -63 -6 -45 -7
  -45 -38 -38 -39 10 -126 41 -126 45 0 2 14 19 32 39 29 33 36 36 85 36 45 0
  53 -3 53 -19z"/>
  </g>
  </svg>`;

export function creatWinners() {
  const wrapper = document.querySelector('.wrapper');
  const wrapperWinners = document.createElement('div');
  wrapperWinners.classList.add('wrapper__winners');

  const winnresTitle = document.createElement('h2');
  winnresTitle.classList.add('winnres__title');
  winnresTitle.textContent = 'Winners';

  const winnersPage = document.createElement('h3');
  winnersPage.classList.add('winners__page');
  winnersPage.textContent = 'Page';

  const tableWinners = document.createElement('table');
  tableWinners.classList.add('table-winners');

  const tr = document.createElement('tr');

  const thNumber = document.createElement('th');
  thNumber.classList.add('table__title');
  thNumber.textContent = 'Number';

  const thCar = document.createElement('th');
  thCar.classList.add('table__title');
  thCar.textContent = 'Car';

  const thName = document.createElement('th');
  thName.classList.add('table__title');
  thName.textContent = 'Name';

  const thWins = document.createElement('th');
  thWins.classList.add('table__title');
  thWins.textContent = 'Wins';
  thWins.setAttribute('data-sort-name', 'wins');

  const thTime = document.createElement('th');
  thTime.classList.add('table__title');
  thTime.textContent = 'Time';
  thTime.setAttribute('data-sort-name', 'time');

  tr.appendChild(thNumber);
  tr.appendChild(thCar);
  tr.appendChild(thName);
  tr.appendChild(thWins);
  tr.appendChild(thTime);

  tableWinners.appendChild(tr);

  wrapperWinners?.appendChild(winnresTitle);
  wrapperWinners?.appendChild(winnersPage);
  wrapperWinners?.appendChild(tableWinners);
  wrapperWinners?.appendChild(addBtnPagination());
  wrapper?.appendChild(wrapperWinners);

  populateWinnersTable();
}

export const renderWinner = (
  table: HTMLTableElement,
  num: number,
  winner: Winner
) => {
  const tr = document.createElement('tr');

  const tdNumber = document.createElement('td');
  tdNumber.textContent = String(num);

  const tdCar = document.createElement('td');
  tdCar.innerHTML = createCarSmall(winner.color);

  const tdName = document.createElement('td');
  tdName.textContent = winner.name;

  const tdWins = document.createElement('td');
  tdWins.textContent = winner.wins.toString();

  const tdTime = document.createElement('td');
  tdTime.textContent = winner.time.toString();

  tr.appendChild(tdNumber);
  tr.appendChild(tdCar);
  tr.appendChild(tdName);
  tr.appendChild(tdWins);
  tr.appendChild(tdTime);

  table.appendChild(tr);
};

function fillWinnersTable(winnersData: Winner[]) {
  const tableWinners = document.querySelector('.table-winners');

  if (!tableWinners) {
    console.error('Element with class "table-winners" not found.');
    return;
  }
  tableWinners.innerHTML = '';

  const trHeader = document.createElement('tr');
  const thNumber = document.createElement('th');
  thNumber.classList.add('table__title');
  thNumber.textContent = 'Number';

  const thCar = document.createElement('th');
  thCar.classList.add('table__title');
  thCar.textContent = 'Car';

  const thName = document.createElement('th');
  thName.classList.add('table__title');
  thName.textContent = 'Name';

  const thWins = document.createElement('th');
  thWins.classList.add('table__title');
  thWins.textContent = 'Wins';
  thWins.setAttribute('data-sort-name', 'wins');

  const thTime = document.createElement('th');
  thTime.classList.add('table__title');
  thTime.textContent = 'Time';
  thTime.setAttribute('data-sort-name', 'time');

  trHeader.appendChild(thNumber);
  trHeader.appendChild(thCar);
  trHeader.appendChild(thName);
  trHeader.appendChild(thWins);
  trHeader.appendChild(thTime);

  tableWinners.appendChild(trHeader); // Добавляем заголовок в таблицу

  winnersData.forEach((winner, index) => {
    if (winner.car) {
      const tr = document.createElement('tr');
      const tdNumber = document.createElement('td');
      tdNumber.textContent = String(index + 1);

      const tdCar = document.createElement('td');
      tdCar.innerHTML = createCarSmall(winner.car.color);

      const tdName = document.createElement('td');
      tdName.textContent = winner.car.name;

      const tdWins = document.createElement('td');
      tdWins.textContent = winner.wins.toString();

      const tdTime = document.createElement('td');
      tdTime.textContent = winner.time.toString();

      tr.appendChild(tdNumber);
      tr.appendChild(tdCar);
      tr.appendChild(tdName);
      tr.appendChild(tdWins);
      tr.appendChild(tdTime);

      tableWinners.appendChild(tr);
    }
  });
}

export async function populateWinnersTable() {
  try {
    const winnersData = await getWinners();

    fillWinnersTable(winnersData);
  } catch (error) {
    console.error('Error fetching winners:', error);
  }
}
