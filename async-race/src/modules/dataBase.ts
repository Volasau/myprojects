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
