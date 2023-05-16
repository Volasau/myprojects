let vertical = 10;
let gorisontal = vertical;
let mines = 20;
let sizeMines = 23;

const body = document.getElementsByTagName('body')[0];
body.classList.add('body');

(function createTitle() {
  const nameGame = document.createElement('p');
  nameGame.innerHTML = 'Mineswepers';
  nameGame.classList.add('title');
  document.body.appendChild(nameGame);

  const menuGame = document.createElement('div');
  menuGame.classList.add('menu__game');

  const easyBtn = document.createElement('button');
  easyBtn.textContent = '10';
  easyBtn.classList.add('button_game');
  easyBtn.classList.add('active');
  easyBtn.setAttribute('data-value', '10');

  const mediumBtn = document.createElement('button');
  mediumBtn.textContent = '15';
  mediumBtn.classList.add('button_game');
  mediumBtn.setAttribute('data-value', '15');

  const hardBtn = document.createElement('button');
  hardBtn.textContent = '25';
  hardBtn.classList.add('button_game');
  hardBtn.setAttribute('data-value', '25');

  menuGame.appendChild(easyBtn);
  menuGame.appendChild(mediumBtn);
  menuGame.appendChild(hardBtn);

  document.body.appendChild(menuGame);

  const area = document.createElement('div');
  area.classList.add('name');
  area.style.display = 'grid';
  area.style.gridTemplateColumns = `repeat(${vertical}, 25px)`;
  document.body.appendChild(area);

  const menuGameActive = document.querySelector('.menu__game');

  menuGame.addEventListener('click', (event) => {
    const buttons = menuGameActive.querySelectorAll('.button_game');
    buttons.forEach((button) => {
      if (button === event.target) {
        if (!button.classList.contains('active')) {
          button.classList.add('active');
        }
      } else {
        button.classList.remove('active');
      }
    });
  });
})();

startGame(vertical, gorisontal, mines);

function startGame(vertical, gorisontal, mines) {
  const place = document.querySelector('.name');
  const areaBtn = vertical * gorisontal;
  place.innerHTML = '<button></button>'.repeat(areaBtn);
  const cells = [...place.children];

  cells.forEach((button) => {
    button.setAttribute('type', 'button');
    button.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (button.innerHTML === '') {
        button.innerHTML = '<img src="./assets/img/flag.png" width="16">';
        const audio = new Audio('./assets/sound/chetkiy.mp3');
        audio.play();
      } else {
        button.innerHTML = '';
      }
    });
  });

  let isFirstClick = true;
  let minesNow = null;

  place.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'BUTTON') {
      return;
    }
    const index = cells.indexOf(event.target);
    const colum = index % vertical;
    const row = Math.floor(index / vertical);

    if (isFirstClick) {
      isFirstClick = false;
      minesNow = [...Array(areaBtn).keys()]
        .filter((i) => i !== index)
        .sort(() => Math.random() - 0.5)
        .splice(0, mines);
    }
    open(row, colum);
  });

  function isValid(row, colum) {
    return row >= 0 && row < gorisontal && colum >= 0 && colum < vertical;
  }

  function writeNumber(row, colum) {
    let number = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (isMine(row + j, colum + i)) {
          number++;
        }
      }
    }
    return number;
  }

  function open(row, colum) {
    if (!isValid(row, colum)) return;
    const index = row * vertical + colum;
    const cell = cells[index];
    if (isMine(row, colum)) {
      const audio = new Audio('./assets/sound/notwin.mp3');
      audio.play();
      cell.innerHTML = `<img src="./assets/img/mine.png" width=${sizeMines}>`;
      cells.forEach((button, index) => {
        const colum = index % vertical;
        const row = Math.floor(index / vertical);
        if (isMine(row, colum)) {
          button.innerHTML = `<img src="./assets/img/mine.png" width=${sizeMines}>`;
        } else {
          button.innerHTML = writeNumber(row, colum);
        }
        button.disabled = true;
      });
      setTimeout(() => {
        alert('Game over. Try again');
        restartGame();
      }, 300);
      return;
    } else {
      const audio = new Audio('./assets/sound/open.mp3');
      audio.play();
      cell.innerHTML = writeNumber(row, colum);
    }
    cell.disabled = true;
  }

  function isMine(row, colum) {
    if (!isValid(row, colum)) return false;
    const index = row * vertical + colum;
    return minesNow.includes(index);
  }

  function restartGame() {
    startGame(vertical, gorisontal, mines);
  }
}
