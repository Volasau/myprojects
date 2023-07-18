import { Car /*Speed, Winner*/ } from './dataBase';
import { addPlaceTraks } from './creatHTMLnew';

export const baseURL = 'http://localhost:3000';
export const garage = `${baseURL}/garage`;
export const engine = `${baseURL}/engine`;
export const winners = `${baseURL}/winners`;

export async function getCarsList(): Promise<Car[]> {
  const response = await fetch(garage);
  const data = await response.json();
  // console.log(data);
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
    const cars = await getCarsList();
    addPlaceTraks(cars);
    return car as Car;
  }
  throw new Error('Error for new car');
}
