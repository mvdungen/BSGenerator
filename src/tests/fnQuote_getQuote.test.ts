import { getAuthor, getQuote } from '../components/Quote/fnQuote';

describe('fnQuote - function getQuote', () => {
	test('fnQuote - function getQuote', () => {
		// generate quote with test data
		const quote: string = getQuote({
			data: {
				PART1: ['test 1'],
				PART2: ['test 2'],
				PART3: ['test 3'],
				PART4: ['test 4'],
				PART5: ['test 5'],
				PART6: ['test 6'],
				PART7: ['test 7'],
				PART8: ['test 8'],
			},
		});
		// test
		expect(quote).toEqual(
			'test 1 test 2 test 3 test 4 test 5 test 6 test 7 test 8'
		);
	});

	test('fnQuote - function getAuthor', () => {
		// generate quote with test data
		const author: string = getAuthor({
			data: { FIRST: ['test'], LAST: ['test'] },
		});
		// test
		expect(author).toEqual('test test');
	});
});
