//
// utility functions
//

/**
 * @function getRandomNumber
 * @description Returns a random integer between min and max values
 * @param min optional number, default = 0, floor value of return number
 * @param max optional number, default = 1000, ceiling value of return number
 * @returns A random number between min and max values
 */

export function getRandomNumber(props?: {
	min?: number;
	max?: number;
}): number {
	// pre check
	if (props && props.min !== undefined && props.max !== undefined) {
		if (props.min === props.max) {
			return props.min;
		}
	}
	// initialize
	let returnValue: number = 0,
		minValue: number = props && props.min ? props.min : 0,
		maxValue: number = props && props.max ? props.max : 1000;
	// get
	returnValue = minValue + Math.round(Math.random() * (maxValue - minValue));
	// return random number
	return returnValue;
}

/**
 * @function getID
 * @description Returns a (prefixed) unique ID
 * @param prefix optional, id prefix, default is empty string as prefix
 * @returns (Prefixed) unique ID
 */

export function getID(props?: { prefix: string }): string {
	// return the ID
	return `${props ? props.prefix : 'ID'}${Math.random()
		.toString(16)
		.slice(-8)}`;
}
