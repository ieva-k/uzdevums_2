import { Point } from '../data';

const algorithm = (first: Point, second: Point) =>
  (second.x - first.x) * (second.y + first.y);


export const isClockWise = (points: Point[]): boolean => {
  let sum = 0;
  for (let i = 1; i < points.length; i++) {
    if (i === points.length - 1) {
      sum += algorithm(points[i], points[0]);
    } 
      sum += algorithm(points[i - 1], points[i]);
  }
  return sum >=0 ? true : false
};

// sum 0 is possible only if horizontal vertex