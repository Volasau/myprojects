import { createNewCar, deleteCar, getCarsList, updateCar } from './apiREST';
import { creatGarage } from './creatHTML';
import { Car, carBrands } from './dataBase';

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
    console.log('Произошла ошибка при удалении машины:', error);
  }
}

export function handleCreateCar() {
  const inputTextCreate: HTMLInputElement | null =
    document.querySelector('.input__creat-text');
  const inputColorCreate: HTMLInputElement | null = document.querySelector(
    '.input__creat-color'
  );

  if (!inputTextCreate || !inputColorCreate) {
    console.error('Не удалось найти поля ввода');
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
    .then((car) => {
      console.log('Новая машина успешно добавлена:', car);
      creatGarage();
    })
    .catch((error) => {
      console.log('Произошла ошибка при добавлении новой машины:', error);
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
      console.error(error);
    }
  };
}
