let vertical = 10;
let gorisontal = vertical;
let mines = 10;
let sizeMines = 23;

const body = document.getElementsByTagName('body')[0];
body.classList.add('body');

const menuContainer = document.createElement('div');
menuContainer.classList.add('menu-container');
document.body.appendChild(menuContainer);

const menuTitle = document.createElement('p');
menuTitle.innerHTML = 'Размер поля и количество мин:';
menuTitle.classList.add('title');
menuContainer.appendChild(menuTitle);

const selectElement = document.createElement('select');
selectElement.classList.add('select');

const sizeArea = ['10', '15', '25'];

sizeArea.forEach((element) => {
  const sizeAreaElement = document.createElement('option');
  sizeAreaElement.textContent = element;
  selectElement.appendChild(sizeAreaElement);
});

selectElement.value = '10';

selectElement.addEventListener('change', (event) => {
  const selectedValue = event.target.value;
  vertical = parseInt(selectedValue);
  gorisontal = vertical;
  createTitle();
  startGame(vertical, gorisontal, mines);
});

const minesInput = document.createElement('input');
minesInput.classList.add('input__mines');
minesInput.setAttribute('type', 'number');
minesInput.setAttribute('min', '10');
minesInput.setAttribute('max', '99');
minesInput.setAttribute('value', '10');
menuContainer.appendChild(minesInput);

minesInput.addEventListener('change', (event) => {
  const selectedValue = parseInt(event.target.value);
  if (selectedValue > 0 && selectedValue <= 99) {
    mines = selectedValue;
    createTitle();
    startGame(vertical, gorisontal, mines);
  }
});

menuContainer.appendChild(selectElement);
menuContainer.appendChild(minesInput);

const statistiks = document.createElement('div');
statistiks.classList.add('statistiks');
document.body.appendChild(statistiks);

const timerSpan = document.createElement('span');
timerSpan.textContent = 'Время:';
statistiks.appendChild(timerSpan);

const timerText = document.createElement('span');
timerText.classList.add('timer');
statistiks.appendChild(timerText);

const stepSpan = document.createElement('span');
stepSpan.textContent = 'Ходы:';
statistiks.appendChild(stepSpan);

const res = document.createElement('button');
res.classList.add('button__restat');
res.textContent = 'Res';
document.body.appendChild(res);
/////////////////////////////////////////////
const resBtn = document.querySelector('.button__restat');
resBtn.addEventListener('click', () => {
  createTitle();
  startGame(vertical, gorisontal, mines);
});

const stepText = document.createElement('span');
stepText.classList.add('step');
statistiks.appendChild(stepText);
createTitle();
startGame(vertical, gorisontal, mines);

function createTitle() {
  const area = document.querySelector('.name');
  if (area) {
    document.body.removeChild(area);
  }

  const newArea = document.createElement('div');
  newArea.classList.add('name');
  newArea.style.display = 'grid';
  newArea.style.gridTemplateColumns = `repeat(${vertical}, 25px)`;
  document.body.appendChild(newArea);
}

function startGame(vertical, gorisontal, mines) {
  stepText.textContent = 0;
  const place = document.querySelector('.name');
  const areaBtn = vertical * gorisontal;
  place.innerHTML = '<button></button>'.repeat(areaBtn);
  const cells = [...place.children];

  let finish = areaBtn;

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
  let clickCount = 0;
  const results = [];

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
    clickCount++;
    incrementMoveCount();
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
    if (cell.disabled) return;
    cell.disabled = true;
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
      const count = writeNumber(row, colum);

      if (count === 0) {
        cell.innerHTML = '';
        cell.disabled = true;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            open(row + j, colum + i);
          }
        }
      } else {
        if (count === 1) {
          cell.innerHTML = `<span class='one'>1</span>`;
        } else if (count === 2) {
          cell.innerHTML = `<span class='two'>2</span>`;
        } else if (count === 3) {
          cell.innerHTML = `<span class='three'>3</span>`;
        } else if (count === 4) {
          cell.innerHTML = `<span class='four'>4</span>`;
        } else if (count > 4) {
          cell.innerHTML = `<span class='five'>${count}</span>`;
        }
        cell.disabled = true;
      }

      finish--;

      if (finish <= mines) {
        const audio = new Audio('./assets/sound/youwin.mp3');
        audio.play();
        setTimeout(() => {
          alert(
            `Hooray! You found all mines in $[[]] seconds and ${clickCount} moves!`
          );
          restartGame();
        }, 300);
      }
    }
  }

  function isMine(row, colum) {
    if (!isValid(row, colum)) return false;
    const index = row * vertical + colum;
    return minesNow.includes(index);
  }

  function restartGame() {
    startGame(vertical, gorisontal, mines);
  }

  function incrementMoveCount() {
    updateMovesValue();
  }
  function updateMovesValue() {
    stepText.textContent = clickCount;
  }
}
