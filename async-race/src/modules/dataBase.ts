export const carBrands = [
  'Acura',
  'Audi',
  'BMW',
  'Bugatti',
  'Buick',
  'Bentley',
  'Cadillac',
  'Chrysler',
  'Citroen',
  'Ford',
  'Ferrari',
  'Honda',
  'Hummer',
  'Hyundai',
  'Infiniti',
  'Jaguar',
  'Jeep',
  'KIA',
  'Lada',
  'Lamborghini',
  'Lexus',
  'Maserati',
  'Maybach',
  'Mazda',
  'Mercedes',
  'Nissan',
  'Opel',
  'Porsche',
  'Rolls-Royce',
  'Skoda',
  'Subaru',
  'Toyota',
  'Tesla',
  'VW',
  'UAZ',
];

export const carModels = [
  'Grand Caravan',
  'X5',
  'X3',
  'X6',
  'X4',
  'Duster',
  'CR-V',
  'Corolla',
  'C1',
  'C3',
  'C4',
  'Berlingo',
  'Rapid',
  'Largus',
  'LS',
  'RX',
  '350',
  'CX-5',
  'CX-9',
  'CX-3',
  'Roadster',
  'Phantom',
  'Camry',
  'Polo',
  'Arkana',
  'Sandero',
  'Logan',
  'Trafic',
  'Captur',
  'RAV4',
  'Rio',
  'Creta',
  'Solaris',
];

export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface Winner extends Car {
  id: number;
  wins: number;
  time: number;
  car?: Car;
}

export interface Speed {
  velocity: number;
  distance: number;
}

export interface moveCar extends HTMLElement {
  moving: boolean;
  start: number;
  requestID: number;
}

export interface TimeRace extends Car {
  startTime?: number;
  finishTime?: number;
}

export function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
