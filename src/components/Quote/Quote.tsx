import React, { useContext, useState, useEffect } from 'react';
// components
import { IAppSettings } from '../../app/appSettings';
import { appContext } from '../../app/App';
import { getQuote, getAuthor } from './fnQuote';
import { Separator } from '@fluentui/react';
// styling
import './css/quote.css';

export interface IQuoteProps {}

export interface IQuoteState {
	isLoading: boolean;
	quote: string;
	author: string;
}

export type TYPEFadeDirection = 'FadeIn' | 'FadeOut';

export function Quote(props: IQuoteProps) {
	// initialize
	const ctxApp = useContext<IAppSettings>(appContext);

	// state
	const [quoteState, setQuoteState] = useState<IQuoteState>({
		isLoading: true,
		quote: '',
		author: '',
	});

	// mount > add listners and auto refresh timers ---------------------------

	useEffect(() => {
		function bodyKeyPress(ev: KeyboardEvent) {
			// check appropriate keys
			switch (ev.key) {
				case 'r': // refresh quote
					// stop bubbling
					ev.preventDefault();
					// refresh quote
					reloadQuoteHandlerX();
					break;
				default:
				// do nothing...
			}
		}

		function reloadQuoteHandlerX() {
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
		}

		// add hotkeys to body
		const _body: HTMLBodyElement | null = document.querySelector('body');

		// body present > add keypress event listner
		if (_body) {
			console.log('setting up listners...');
			_body.addEventListener('keypress', ev => bodyKeyPress(ev));
		}

		// auto refresh quote
		let _intervalHandle: number = 0;
		// check app settings
		if (ctxApp.autoRefreshQuote) {
			// set window timer for auto refresh the quote
			_intervalHandle = window.setInterval(() => {
				console.log('timeout');
				// update quote
				reloadQuoteHandlerX();
			}, ctxApp.autoRefreshQuoteInterval * 1000);
		}

		// set first quote
		reloadQuoteHandlerX();

		// unmount > cleanup --------------------------------------------------
		return () => {
			if (_body) {
				// remove event listners
				_body.removeEventListener('keypress', ev => bodyKeyPress(ev));
				// shut down interval
				window.clearInterval(_intervalHandle);
			}
		};
	}, [ctxApp]);

	//
	// render
	//
	if (quoteState.isLoading) {
		// loading > do nothing
		return null;
	} else {
		// loaded > show quote
		return (
			<div className='quote-container'>
				<Separator className='author'>{quoteState.author}</Separator>
				<div>
					<div className='quote'>{quoteState.quote}</div>
				</div>
				<Separator />
			</div>
		);
	}
}
