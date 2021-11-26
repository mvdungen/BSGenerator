import React, {
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react';
// components
import { IAppSettings } from '../../app/appSettings';
import { appContext } from '../../app/App';
import { getQuote, getAuthor } from './fnQuote';
// styling
import './css/quote.css';

export interface IQuoteProps {
	refresh: boolean;
}

export interface IQuoteState {
	isLoading: boolean;
	quote: string;
	author: string;
}

export type TYPEFadeDirection = 'FadeIn' | 'FadeOut';

export function Quote(props: IQuoteProps) {
	// initialize
	const ctxApp = useContext<IAppSettings>(appContext);

	// const currentQuote = useRef<string>('');

	// state
	const [quoteState, setQuoteState] = useState<IQuoteState>({
		isLoading: true,
		quote: '',
		author: '',
	});

	const reloadQuoteHandler = useCallback(() => {
		// function called from either the refresh quote button or the window timer interval
		// both retrieved from the app context, e.g. showRefreshQuoteButton / autoRefreshQuote
		const _quote: string = getQuote({ data: ctxApp.data.parts });
		const _author: string = getAuthor({ data: ctxApp.data.authors });
		// set state
		setQuoteState({
			isLoading: false,
			quote: _quote,
			author: _author,
		});
	}, [ctxApp]);

	// // function > fade out
	// function toggleQuoteFade(direction: TYPEFadeDirection) {
	// 	// get qoute container
	// 	const _elm: any = document.getElementsByClassName('quote-container');
	// 	// check if there is a container
	// 	if (_elm && _elm.length === 1) {
	// 		// get container
	// 		const _container: HTMLDivElement = _elm[0];
	// 		// toggle fade
	// 		console.log('container class', _container.classList);
	// 		if (direction === 'FadeOut') {
	// 			_container.classList.add('fade');
	// 		} else {
	// 			_container.classList.remove('fade');
	// 		}
	// 	}
	// }

	// quote > initalizer
	useEffect(() => {
		console.log('init');
		// init
		let _intervalHandle: number = 0;
		// check app settings
		if (ctxApp.autoRefreshQuote) {
			// set window timer for auto refresh the quote
			_intervalHandle = window.setInterval(() => {
				console.log('timeout');
				// update quote
				reloadQuoteHandler();
			}, ctxApp.autoRefreshQuoteInterval * 1000);
		}
		// set state
		reloadQuoteHandler();

		// unmount > clean up
		return () => {
			// shut down interval
			window.clearInterval(_intervalHandle);
		};
	}, [ctxApp, reloadQuoteHandler]);

	// // quote > toggle fade on container
	// useEffect(() => {
	// 	if (quoteState.quote !== currentQuote.current) {
	// 		// fade out
	// 		toggleQuoteFade('FadeIn');
	// 		// save current quote
	// 		currentQuote.current = quoteState.quote;
	// 	}
	// }, [quoteState]);

	//
	// render
	//
	if (quoteState.isLoading) {
		// loading quote > do nothing
		return null;
	} else {
		// quote loaded > show quote
		return (
			<div className='quote-container'>
				<div className='quote'>{quoteState.quote}</div>
				<div className='quote-author'>{quoteState.author}</div>
			</div>
		);
	}
}
