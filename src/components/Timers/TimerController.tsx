import React, { useState } from 'react';
// interfaces, components and functions
import Timer from './Timer';
import { PrimaryButton } from '@fluentui/react';
import { getID } from '../../utils/fnUtils';
// styling
import styling from './css/timercontroller.module.css';

export interface ITimerControllerProps {}
export interface ITimerControllerState {
	timers: ITimerSettings[];
}

export interface ITimerSettings {
	id: string;
	totalSeconds: number;
	isPaused?: boolean;
}

export default function TimerController(props: ITimerControllerProps) {
	//
	// state
	//

	const _testTimers: ITimerSettings[] = [
		{ id: getID({ prefix: 'TIMER' }), totalSeconds: 10 },
		{ id: getID({ prefix: 'TIMER' }), totalSeconds: 20 },
		{ id: getID({ prefix: 'TIMER' }), totalSeconds: 30, isPaused: true },
		{ id: getID({ prefix: 'TIMER' }), totalSeconds: 40 },
		{ id: getID({ prefix: 'TIMER' }), totalSeconds: 50, isPaused: true },
	];
	const [controllerState, setControllerState] =
		useState<ITimerControllerState>({
			timers: _testTimers,
		});

	// mount ------------------------------------------------------------------

	// useEffect(() => {
	// 	// component mount
	// });

	// helper functions -------------------------------------------------------

	function addTimer() {
		// get reference
		const _timers: ITimerSettings[] = controllerState.timers;
		// create new timer
		const _newTimer: ITimerSettings = {
			id: getID({ prefix: 'TIMER' }),
			totalSeconds: 300,
		};
		// add timer
		_timers.push(_newTimer);
		// add timer
		setControllerState({ timers: _timers });
	}

	function deleteTimer(timerID: string) {
		// delete timer
		const _deleteIndex: number = controllerState.timers.findIndex(
			(_timer: ITimerSettings) => _timer.id === timerID
		);
		// check
		if (_deleteIndex > -1) {
			// get
			const _timers: ITimerSettings[] = controllerState.timers;
			// delete
			_timers.splice(_deleteIndex, 1);
			// state
			setControllerState({ timers: _timers });
			console.log(controllerState);
		}
	}

	function renderTimers(): JSX.Element[] {
		// set
		const _timers: JSX.Element[] = [];
		// check
		if (controllerState.timers) {
			// iterate
			controllerState.timers.forEach((_timerSetting: ITimerSettings) => {
				_timers.push(
					<Timer
						key={_timerSetting.id}
						timerSettings={_timerSetting}
						deleteTimer={deleteTimer}
					/>
				);
			});
		}
		// return
		return _timers;
	}

	//
	// render -----------------------------------------------------------------
	//
	return (
		<div className={styling.container}>
			<div>{renderTimers()}</div>
			<div className={styling.containerButtons}>
				<PrimaryButton
					text='Add Timer'
					iconProps={{ iconName: 'Add' }}
					onClick={addTimer}
				/>
			</div>
		</div>
	);
}
