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
		// get random item to retrieve
		const _rndNr: number = getRandomNumber({
			min: 0,
			max: props.data[PART].length - 1,
		});
		// add to sentence
		_quote = `${_quote}${_quote.length === 0 ? '' : ' '}${
			props.data[PART][_rndNr]
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
	// get random item to retrieve
	const _rndNr: number = getRandomNumber({
		min: 0,
		max: props.data['names'].length - 1,
	});
	// return author
	return props.data['names'][_rndNr];
}
