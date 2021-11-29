import React, { createContext } from 'react';
// interfaces and components
import { appSettings, IAppSettings } from './appSettings';
// import { Quote } from '../components/Quote/Quote';
import TimerController from '../components/Timers/TimerController';
import { initializeIcons } from '@fluentui/react';
// styling
import './css/App.css';

// create the main context
export const appContext = createContext<IAppSettings>({ ...appSettings });

function App() {
	// fluent design thingies
	initializeIcons();

	return (
		<appContext.Provider value={{ ...appSettings }}>
			<div className='container'>
				<div className='app-container grid-content'>
					<TimerController />
				</div>
				<div className='app-footer grid-content'></div>
			</div>
		</appContext.Provider>
	);
}

export default App;
