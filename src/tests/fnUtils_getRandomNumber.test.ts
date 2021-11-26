import { getRandomNumber } from '../utils/fnUtils';

describe('fnUtils - function getRandomNumber', () => {
	test('Get random number > no parameter', () => {
		expect(getRandomNumber()).toBeGreaterThan(0);
	});

	test('Get random number > empty parameter', () => {
		expect(getRandomNumber({})).toBeGreaterThan(0);
	});

	test('Get random number > parameter, minimum value', () => {
		// get number
		let nr: number = getRandomNumber({ min: 5 });
		// test
		expect(nr).toBeGreaterThanOrEqual(5);
		expect(nr).toBeLessThanOrEqual(1000);
	});

	test('Get random number > parameter, maximum value', () => {
		expect(getRandomNumber({ max: 5 })).toBeLessThanOrEqual(5);
	});

	test('Get random number > parameter, minimum and maximum value', () => {
		// get number
		let nr: number = getRandomNumber({ min: 1, max: 5 });
		// test
		expect(nr).toBeGreaterThanOrEqual(1);
		expect(nr).toBeLessThanOrEqual(5);
	});

	test('Get random number > min and max are equal', () => {
		expect(getRandomNumber({ min: 5, max: 5 })).toBe(5);
	});
});
