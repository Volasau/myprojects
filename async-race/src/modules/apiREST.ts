import { moveCarForward /*stopCar*/ } from './carActions';
import { Car, Speed /*Winner*/ } from './dataBase';
// import /* addPlaceTraks*/ './creatHTML';

export const baseURL = 'http://localhost:3000';
export const garage = `${baseURL}/garage`;
export const engine = `${baseURL}/engine`;
export const winners = `${baseURL}/winners`;

export async function getCarsList(): Promise<Car[]> {
  const response = await fetch(garage);
  const data = await response.json();
  // console.log(data);
  // console.log(data.length);
  return data;
}

export async function getCar(id: string): Promise<Car> {
  const response = await fetch(`${garage}/${id}`);
  const cars = await response.json();
  // console.log(data);
  return cars;
}

export async function createNewCar(
  name: string,
  color: string
): Promise<Car | undefined> {
  const res = await fetch(`${garage}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: name, color: color }),
  });
  if (res.ok) {
    const car = await res.json();
    return car as Car;
  }
  throw new Error('Произошла ошибка при добавлении новой машины');
}
export async function deleteCar(id: string): Promise<void> {
  await fetch(`${garage}/${id}`, {
    method: 'DELETE',
  });
}

export async function updateCar(id: string, carData: Car): Promise<Car> {
  const car = await fetch(`${garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(carData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const res = car.json();
  return res;
}

export async function startEngine(id: number) {
  const response = await fetch(`${engine}?id=${id}&status=started`, {
    method: 'PATCH',
  })
    .then(async (res) => {
      const data = await res.json();
      const time = Number((data.distance / data.velocity / 1000).toFixed(2));
      moveCarForward(String(id), time);
    })
    .catch((err) => {
      throw err;
    });
  if (response === null) {
    console.log('error in getting data');
  }
}

export async function stopEngine(id: string): Promise<Speed> {
  const speed = await fetch(`${engine}?id=${id}&status=stopped`, {
    method: 'PATCH',
  });
  // console.log(speed);
  return speed.json();
}

export async function switchCar(id: string) {
  const response = await fetch(`${engine}?id=${id}&status=drive`, {
    method: 'PATCH',
  });

  const car = await response.json();
  const success = car.success;
  return success;
}
