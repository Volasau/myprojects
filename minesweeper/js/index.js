let vertical = 10;
let gorisontal = vertical;
let mines = 10;
let results = JSON.parse(localStorage.getItem('gameResults')) || [];

function saveResults() {
  localStorage.setItem('gameResults', JSON.stringify(results));
}

window.addEventListener('beforeunload', saveResults);

function saveGameSettings(vertical, mines) {
  const gameSettings = {
    vertical: vertical,
    mines: mines,
  };
  localStorage.setItem('gameSettings', JSON.stringify(gameSettings));
}

function loadGameSettings() {
  const savedSettings = localStorage.getItem('gameSettings');
  if (savedSettings) {
    const gameSettings = JSON.parse(savedSettings);
    vertical = gameSettings.vertical;
    gorisontal = vertical;
    mines = gameSettings.mines;
    selectElement.value = vertical.toString();
    minesInput.value = mines.toString();
  }
}

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
  saveGameSettings(vertical, mines);
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
    saveGameSettings(vertical, mines);
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
//////////////////////////////////////////////
const result = document.createElement('button');
result.classList.add('button__result');
result.textContent = 'Result';
document.body.appendChild(result);

const resaultArray = document.createElement('div');
resaultArray.classList.add('results-container');
document.body.appendChild(resaultArray);

function updateResults() {
  const resultsContainer = document.querySelector('.results-container');
  resultsContainer.innerHTML = '';

  for (let i = 0; i < results.length; i++) {
    const resultText = document.createElement('p');
    resultText.textContent = results[i];
    resultsContainer.appendChild(resultText);
  }
}

/////////////////////////////////////////////
const resBtn = document.querySelector('.button__restat');
resBtn.addEventListener('click', () => {
  stopTime();
  timerStart = false;
  createTitle();
  startGame(vertical, gorisontal, mines);
});

const stepText = document.createElement('span');
stepText.classList.add('step');
statistiks.appendChild(stepText);

const flagsSpan = document.createElement('span');
flagsSpan.textContent = 'Флаги:';
statistiks.appendChild(flagsSpan);
const flagsText = document.createElement('span');
flagsText.classList.add('flags');
statistiks.appendChild(flagsText);

const minesSpan = document.createElement('span');
minesSpan.textContent = 'Мины:';
statistiks.appendChild(minesSpan);
const minesText = document.createElement('span');
minesText.classList.add('flags');
statistiks.appendChild(minesText);

window.addEventListener('DOMContentLoaded', () => {
  loadGameSettings();
  createTitle();
  startGame(vertical, gorisontal, mines);
  updateResults();
});

function createTitle() {
  const area = document.querySelector('.name');
  if (area) {
    document.body.removeChild(area);
  }
  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  if (screenWidth <= 700) {
    const newArea = document.createElement('div');
    newArea.classList.add('name');
    newArea.style.display = 'grid';
    newArea.style.gridTemplateColumns = `repeat(${vertical}, 15px)`;
    document.body.appendChild(newArea);
  } else {
    const newArea = document.createElement('div');
    newArea.classList.add('name');
    newArea.style.display = 'grid';
    newArea.style.gridTemplateColumns = `repeat(${vertical}, 25px)`;
    document.body.appendChild(newArea);
  }

  startGame(vertical, gorisontal, mines);
}

window.addEventListener('resize', createTitle);
createTitle();

function startGame(vertical, gorisontal, mines) {
  minesText.textContent = mines;
  flagsText.textContent = 0;
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
        flagsCount++;
        updateFlagsCount();
        const audio = new Audio('./assets/sound/chetkiy.mp3');
        audio.play();
      } else {
        button.innerHTML = '';
        flagsCount--;
        updateFlagsCount();
      }
    });
  });

  let isFirstClick = true;
  let minesNow = null;
  let clickCount = 0;
  let flagsCount = 0;

  place.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.tagName !== 'BUTTON') {
      return;
    }
    const index = cells.indexOf(event.target);
    const colum = index % vertical;
    const row = Math.floor(index / vertical);

    if (isFirstClick) {
      if (!timerStart) {
        startTime();
        timerStart = true;
      }
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
      cell.innerHTML = `<img src="./assets/img/mine.png" width=23>`;
      cells.forEach((button, index) => {
        const colum = index % vertical;
        const row = Math.floor(index / vertical);
        if (isMine(row, colum)) {
          button.innerHTML = `<img src="./assets/img/mine.png" width=23>`;
        } else {
          button.innerHTML = writeNumber(row, colum);
        }
        button.disabled = true;
      });
      setTimeout(() => {
        alert('Game over. Try again');
        stopTime();
        timerStart = false;
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
            `Hooray! You found all mines in ${timeNow} time and ${clickCount} moves!`
          );
          stopTime();
          timerStart = false;
          saveResult(clickCount);
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

  function updateFlagsCount() {
    flagsText.textContent = flagsCount;
    minesText.textContent = mines - flagsCount;
    if (flagsCount >= mines) {
      alert(
        `Обратите внимание вы ставите ${flagsCount} флаг,\n количество мин на поле ${mines}`
      );
    }
  }

  function saveResult(clickCount) {
    const result = `You won in ${timeNow} time and ${clickCount} steps`;
    if (results.length === 10) {
      results.shift();
      results.push(result);
    } else {
      results.push(result);
    }
    updateResults();
  }
}

/////////////////////////////////////////////////////////////////////////
const resultBtn = document.querySelector('.button__result');
const resultTable = document.querySelector('.results-container');
resultTable.classList.remove('block');
resultBtn.addEventListener('click', () => {
  if (resultTable.classList.contains('block')) {
    resultTable.classList.remove('block');
  } else {
    resultTable.classList.add('block');
  }
});

let seconds = 0;
let minutes = 0;
let timer;
let timeNow;
let timerStart = false;
timerText.innerHTML = '00:00';
function startTime() {
  timer = setInterval(() => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    timeNow =
      (minutes > 9 ? minutes : '0' + minutes) +
      ':' +
      (seconds > 9 ? seconds : '0' + seconds);
    timerText.innerHTML = timeNow;
  }, 1000);
}

function stopTime() {
  clearInterval(timer);
  timerText.innerHTML = '00:00';
  timeNow;
  seconds = 0;
}
