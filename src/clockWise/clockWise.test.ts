import { data, test1, testClockwise, testCounterClockwise } from '../data';
import { isClockWise } from './clockWise';

  describe('isPositive()', () => {
    it('should return positive', () => {
      const result = isClockWise(test1);
      expect(result).toEqual(true);
    });

    it('should return positive value in triangle', () => {
      const result = isClockWise(testClockwise);
      expect(result).toEqual(true);
    });

    it('should return negative value in triangle', () => {
      const result = isClockWise(testCounterClockwise);
      expect(result).toEqual(false);
    });

    it('should return negative value in complex figure', () => {
      const result = isClockWise(data);
      expect(result).toEqual(false);
    });

  });

