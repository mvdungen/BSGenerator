import {
	IDataElements,
	dataElements,
	IAuthorElements,
	authorElements,
} from '../data/data';

export interface IAppSettings {
	data: {
		parts: IDataElements;			// quote parts
		authors: IAuthorElements;		// quote authors
	};
	autoRefreshQuote: boolean;			// automatically refresh quotes on screen
	autoRefreshQuoteInterval: number;	// refresh quote after X seconds
	showTimer: boolean;					// timer availability, press T on body element
	defaultTimerMinutes: number;		// default timer count down in minutes
}

export const appSettings: IAppSettings = {
	data: {
		parts: dataElements,
		authors: authorElements,
	},
	// quote refreshing options
	autoRefreshQuote: false,
	autoRefreshQuoteInterval: 15,
	// timer options
	showTimer: false,
	defaultTimerMinutes: 10,
};
