import {
  createNewCar,
  deleteCar,
  getCarsList,
  updateCar,
  startEngine,
  switchCar,
  getCar,
  stopEngine,
} from './apiREST';
import { creatGarage } from './creatHTML';
import { Car, carBrands, carModels, getRandomColor } from './dataBase';

interface ICar extends HTMLElement {
  requestID: number;
}

export async function handleCarRemoval(
  carId: string,
  wrapperCar: HTMLDivElement
) {
  try {
    await deleteCar(carId);
    wrapperCar.remove();
    const cars = getCarsList();
    const pageTitle = document.querySelector('.page__title');
    if (pageTitle instanceof HTMLHeadingElement) {
      cars.then((carList) => {
        pageTitle.textContent = `GARAGE (${carList.length})`;
      });
    }
  } catch (error) {
    // console.log('Произошла ошибка при удалении машины:', error);
  }
}

export function handleCreateCar() {
  const inputTextCreate: HTMLInputElement | null =
    document.querySelector('.input__creat-text');
  const inputColorCreate: HTMLInputElement | null = document.querySelector(
    '.input__creat-color'
  );

  if (!inputTextCreate || !inputColorCreate) {
    // console.error('Не удалось найти поля ввода');
    return;
  }

  let name = inputTextCreate.value;
  const color = inputColorCreate.value;

  if (!name) {
    const randomIndex = Math.floor(Math.random() * carBrands.length);
    name = carBrands[randomIndex];
  }

  const garageWrapper = document.querySelector('.garage__wrapper');
  if (garageWrapper) {
    garageWrapper.remove();
  }

  createNewCar(name, color)
    .then((/*car*/) => {
      // console.log('Новая машина успешно добавлена:', car);
      creatGarage();
    })
    .catch((/*error*/) => {
      // console.log('Произошла ошибка при добавлении новой машины:', error);
    });
}

export function handleUpdateClick(
  btnSelect: HTMLButtonElement,
  menuUpdate: HTMLDivElement,
  wrapperCar: HTMLDivElement
) {
  return async () => {
    try {
      const carId = parseInt(
        btnSelect.getAttribute('data-select')?.split('-')[0] || '0',
        10
      );

      if (carId) {
        const newNameInput = menuUpdate.querySelector(
          '.input__text'
        ) as HTMLInputElement;
        const newColorInput = menuUpdate.querySelector(
          '.input__color'
        ) as HTMLInputElement;
        let newName = newNameInput?.value;
        const newColor = newColorInput?.value;

        if (!newName || !newColor) {
          const randomIndex = Math.floor(Math.random() * carBrands.length);
          newName = carBrands[randomIndex];
        }

        const carData: Car = {
          id: carId,
          name: newName,
          color: newColor,
        };

        const updatedCar: Car = await updateCar(carId.toString(), carData);

        const nameCar: Element | null = wrapperCar.querySelector('.name__car');
        if (nameCar) {
          nameCar.textContent = updatedCar.name;
        }

        const carElement: HTMLElement | null = wrapperCar.querySelector('.car');
        if (carElement) {
          carElement.style.fill = updatedCar.color;
        }

        const allTracks: NodeListOf<Element> =
          document.querySelectorAll('.section__car');
        allTracks.forEach((track) => {
          const trackCarElement: HTMLElement | null =
            track.querySelector('.car');
          if (trackCarElement && trackCarElement.id === `${carId}-User`) {
            trackCarElement.style.fill = updatedCar.color;
          }
        });

        menuUpdate.remove();
        const garageWrapper = document.querySelector('.garage__wrapper');
        if (garageWrapper) {
          garageWrapper.remove();
          creatGarage();
        }
      }
    } catch (error) {
      // console.error(error);
    }
  };
}

export function handleStartClick(carId: string): Promise<void> {
  startEngine(Number(carId));
  removeDisableStop(carId);
  addDisableStart(carId);
  return Promise.resolve();
}

let animationRequestId: number | null = null;

export async function moveCarForward(id: string, time: number) {
  const road = document.getElementById(`${id}`) as HTMLElement;

  const car = road.querySelector('.car') as ICar;
  const finish = road.querySelector('.flag') as HTMLElement;

  const carView = car.getBoundingClientRect();
  const finishView = finish.getBoundingClientRect();
  // console.log(finishView);
  const startX = carView.x;
  const finishX = finishView.x + finishView.width;

  const length = finishX - startX;
  const timeMs = time * 1000;
  let start: number | null = null;
  const velocity = length / time;
  function step(currentTime: number) {
    if (!start) start = currentTime;
    const progress = currentTime - start;
    const newX = (progress / 1000) * velocity;

    car.style.transform = `translateX(${newX}px)`;

    if (progress < timeMs) {
      animationRequestId = window.requestAnimationFrame(step);
    }
  }

  animationRequestId = window.requestAnimationFrame(step);

  try {
    await switchCar(id);
  } catch {
    stopEngine(id);
    if (animationRequestId) {
      window.cancelAnimationFrame(animationRequestId);
      animationRequestId = null;
    }
  }
}

export async function getInfoCar(
  menuUpdate: HTMLDivElement,
  btnSelect: HTMLButtonElement
) {
  const newNameInput = menuUpdate.querySelector(
    '.input__text'
  ) as HTMLInputElement;
  const newColorInput = menuUpdate.querySelector(
    '.input__color'
  ) as HTMLInputElement;
  const currentCarId = parseInt(
    btnSelect.getAttribute('data-select')?.split('-')[0] || '0',
    10
  );

  if (currentCarId) {
    const currentCar: Car = await getCar(currentCarId.toString());
    newNameInput.value = currentCar.name;
    newColorInput.value = currentCar.color;
  }
}

export async function startRace() {
  const btnReset = document.querySelector('.btn__reset');
  const btnRace = document.querySelector('.btn__race');

  const allBtnStars = document.querySelectorAll('.btn__start');
  allBtnStars.forEach(async (btnStar) => {
    const carId = btnStar.getAttribute('data-car-id');
    if (carId) {
      await handleStartClick(carId);
    }
  });

  if (btnReset) {
    setTimeout(() => {
      btnReset.removeAttribute('disabled');
    }, 10000);
  }
  if (btnRace) {
    btnRace.setAttribute('disabled', 'disabled');
  }
  addDisableAllBtnCars();
}

export async function stopRace() {
  const btnRace = document.querySelector('.btn__race');

  const btnReset = document.querySelector('.btn__reset');
  const allBtnStop = document.querySelectorAll('.btn__stop');
  allBtnStop.forEach(async (btnStop) => {
    const carId = btnStop.getAttribute('data-car-id');
    if (carId) {
      await handleStopClick(carId);
    }
  });
  if (btnRace) {
    btnRace.removeAttribute('disabled');
  }
  if (btnReset) {
    btnReset.setAttribute('disabled', 'disabled');
  }
  removedisableAllBtnCars();
}

export function returnCarToStart(id: string) {
  const road = document.getElementById(`${id}`) as HTMLElement;
  const domCar = road.querySelector('.car') as HTMLElement;
  domCar.style.transform = `translateX(0)`;
}

export async function handleStopClick(carId: string) {
  if (animationRequestId) {
    window.cancelAnimationFrame(animationRequestId);
    animationRequestId = null;
  }
  returnCarToStart(carId);
  stopEngine(carId);
  removeDisableStart(carId);
  addDisableStop(carId);
}
//Удаляем атрибут disabled для кнопок  Стаоп для машинок
export function removeDisableStop(carId: string) {
  const btnStop = document.querySelector(`[data-stop="${carId}-stop"]`);
  if (btnStop) {
    btnStop.removeAttribute('disabled');
  }
}
//Добавляем атрибут disabled для кнопок  Старт для машинок
export function addDisableStart(carId: string) {
  const btnStar = document.querySelector(`[data-start="${carId}-start"]`);
  if (btnStar) {
    btnStar.setAttribute('disabled', 'disabled');
  }
}
//Удаляем атрибут disabled для кнопок  Старт для машинок
export function removeDisableStart(carId: string) {
  const btnStar = document.querySelector(`[data-start="${carId}-start"]`);
  if (btnStar) {
    btnStar.removeAttribute('disabled');
  }
}
//Добавляем атрибут disabled для кнопок  Стоп для машинок
export function addDisableStop(carId: string) {
  const btnStop = document.querySelector(`[data-stop="${carId}-stop"]`);
  if (btnStop) {
    btnStop.setAttribute('disabled', 'disabled');
  }
}
//Добавляем атрибут disabled для кнопок  Select и Remove для машинок
function addDisableAllBtnCars() {
  const allBtnCars = document.querySelectorAll('.btn__car-menu');
  allBtnCars.forEach((btnCar) => {
    btnCar.setAttribute('disabled', 'disabled');
  });
}
//Удалям атрибут disabled на кнопках Select и Remove для машинок
function removedisableAllBtnCars() {
  const allBtnCars = document.querySelectorAll('.btn__car-menu');
  allBtnCars.forEach((btnCar) => {
    btnCar.removeAttribute('disabled');
  });
}

//Создаем 10 машинок так как не справился с пагинацией и 100 машинок переполнят страницу
export function generateCars() {
  const garageWrapper = document.querySelector('.garage__wrapper');
  if (garageWrapper) {
    garageWrapper.remove();
  }
  for (let i = 0; i < 10; i++) {
    const randomIndex1 = Math.floor(Math.random() * carBrands.length);
    const randomIndex2 = Math.floor(Math.random() * carModels.length);
    const name = `${carBrands[randomIndex1]} ${carModels[randomIndex2]}`;
    const color = getRandomColor();
    createNewCar(name, color).then(() => {
      if (i === 9) {
        creatGarage();
      }
    });
  }
}
