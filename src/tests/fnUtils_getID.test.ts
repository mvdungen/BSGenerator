import { getID } from '../utils/fnUtils';

describe('fnUtils - function getID', () => {
	test('Get ID > no parameter', () => {
		expect(getID()).toContain<string>('ID');
	});

	test('Get ID > parameter with prefix', () => {
		expect(getID({ prefix: 'DIV' })).toContain<string>('DIV');
	});
});
