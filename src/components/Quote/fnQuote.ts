import { IDataElements, IAuthorElements } from '../../data/data';
import { getRandomNumber } from '../../utils/fnUtils';

/**
 * @function getQuote
 * @description Generates and returns a new quote
 * @param data<IDataElements>, elements containing the 4 parts of the quote
 * @returns string, generated quote
 */
export function getQuote(props: { data: IDataElements }): string {
	// initialize
	let _quote: string = '';
	// build quote from main data parts
	for (const PART in props.data) {
		// get random element and add to quote
		_quote = `${_quote}${_quote.length === 0 ? '' : ' '}${
			getRandomElementFromArray({arr: props.data[PART]})
		}`;
	}
	// return
	return _quote;
}

/**
 * @function getAuthor
 * @description Return a random author for the quote
 * @param data<IAuthorElements>, elements containing the authors
 * @returns string, name
 */
export function getAuthor(props: { data: IAuthorElements }): string {
	// initialize
	let _author: string = '';
	// build author from author elements
	for (const NAMEPART in props.data) {
		// get random element
		_author = `${_author}${_author.length === 0 ? '' : ' '}${
			getRandomElementFromArray({arr: props.data[NAMEPART]})
		}`;
	}
	// return author
	return _author;
}

/**
 * @function getRandomElementFromArray
 * @description Returns a random element from passed array
 * @param arr<Array>, array to retrieve from
 * @returns array element
 */
export function getRandomElementFromArray<T>(props: { arr: T[] }): T {
	// get random element from passed array, currently only implemented for
	// arrays with strings, numbers, not objects!
	const _rndNr: number = getRandomNumber({
		min: 0,
		max: props.arr.length - 1,
	});
	// return
	return props.arr[_rndNr];
}
