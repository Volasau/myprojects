export interface Car {
  name: string;
  color: string;
  id: number;
}

export interface Winner {
  id: number;
  wins: number;
  time: number;
  car?: Car;
}

export interface Speed {
  velocity: number;
  distance: number;
}

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
