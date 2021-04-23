export type Point = {
  x: number;
  y: number;
};
// (4,3)  (3,3)  (3,5)  (6,5)  (6,3)  (5,3)  (5,2)  (7,2)  (7,6)  (2,6)  (2,2)  (4,2)
export const data: Point[] = [
  { x: 4, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 5 },
  { x: 6, y: 5 },
  { x: 6, y: 3 },
  { x: 5, y: 3 },
  { x: 5, y: 2 },
  { x: 7, y: 2 },
  { x: 7, y: 6 },
  { x: 2, y: 6 },
  { x: 2, y: 2 },
  { x: 4, y: 2 },
];

export const testClockwise: Point[] = [
  { x: 5, y: 10 },
  { x: 15, y: 20 },
  { x: 20, y: 7 },
];

export const testCounterClockwise: Point[] = [
  { x: 5, y: 10 },
  { x: 20, y: 7 },
  { x: 15, y: 20 },
];

// test only algorithm
export const test1 = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
];
