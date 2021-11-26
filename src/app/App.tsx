import React, { createContext, useState, useEffect } from 'react';
// interfaces and components
import { appSettings, IAppSettings } from './appSettings';
import { Quote } from '../components/Quote/Quote';
import { initializeIcons } from '@fluentui/react';
// styling
import './css/App.css';

// create the main context
export const appContext = createContext<IAppSettings>({ ...appSettings });

function App() {
	// fluent design thingies
	initializeIcons();

	const [refreshQuote, setRefreshQuote] = useState<boolean>(false);

	useEffect(() => {
		// add hotkeys to body
		const _body: HTMLBodyElement | null = document.querySelector('body');

		function bodyKeyPress(ev: KeyboardEvent) {
			// check appropriate keys
			switch (ev.key) {
				case 't':
					// show timer
					break;
				case 'r':
					// stop bubbling
					ev.preventDefault();
					// refresh quote
					setRefreshQuote(!refreshQuote);
					break;
				default:
				// do nothing...
			}
		}

		// check
		if (_body) {
			_body.addEventListener('keypress', ev => bodyKeyPress(ev));
		}

		// unmount > cleanup
		return () => {
			// remove event listners
			if (_body) {
				_body.removeEventListener('keypress', ev => bodyKeyPress(ev));
			}
		};
	});

	return (
		<appContext.Provider value={{ ...appSettings }}>
			<div className='app-container'>
				<Quote refresh={refreshQuote} />
			</div>
		</appContext.Provider>
	);
}

export default App;
