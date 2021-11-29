import React, { useState, useEffect } from 'react';
// interfaces and components
import { IconButton } from '@fluentui/react';
import { ITimerSettings } from './TimerController';
// styling
import styles from './css/timer.module.css';

export interface ITimerProps {
	timerSettings: ITimerSettings;
	deleteTimer: (timerID: string) => void;
}

export interface ITimerState {
	totalSeconds: number;
	partMinutes: number;
	partSeconds: number;
	remainingSeconds: number;
	visualTime: string;
	// actions
	isPaused: boolean;
	isDeleted: boolean;
}

export default function Timer(props: ITimerProps) {
	// component mount --------------------------------------------------------

	const DEFAULT_SECONDS: number = 85;

	const [timerState, setTimerState] = useState<ITimerState>({
		totalSeconds: props.timerSettings.totalSeconds || DEFAULT_SECONDS,
		partMinutes: 0,
		partSeconds: 0,
		remainingSeconds: props.timerSettings.totalSeconds || DEFAULT_SECONDS,
		visualTime: '',
		isPaused:
			props.timerSettings.isPaused !== undefined
				? props.timerSettings.isPaused
				: false,
		isDeleted: false,
	});

	// timer handlers ---------------------------------------------------------

	useEffect(() => {
		// initialize timer

		const _timer = window.setTimeout(() => {
			if (timerState.remainingSeconds > 0) {
				// decrease timer
				setTimerState((prevState: ITimerState) => {
					// set
					const _totalRemaining = timerState.remainingSeconds - 1;
					const _minutes = Math.floor(_totalRemaining / 60);
					const _seconds = _totalRemaining - _minutes * 60;
					// return state
					return {
						...prevState,
						remainingSeconds: _totalRemaining,
						partMinutes: _minutes,
						partSeconds: _seconds,
						visualTime: `${_minutes
							.toString()
							.padStart(2, '0')}:${_seconds
							.toString()
							.padStart(2, '0')}`,
					};
				});
			} else {
				// release timer
				window.clearTimeout(_timer);
				// check
				if (!timerState.isPaused || !timerState.isDeleted) {
					// get audio
					const _audio = new Audio('/sounds/beep.mp3');
					// ...and play
					_audio.play();
				}
			}
		}, 1000);

		// check pause
		if (timerState.isPaused || timerState.isDeleted) {
			// clear the timeout
			window.clearTimeout(_timer);
		}

		// unmount timer component
		return () => {
			// release timer
			window.clearTimeout(_timer);
		};
	});

	//
	// render -----------------------------------------------------------------
	//

	if (timerState.isDeleted) {
		// timer is deleted, return nothing
		return null;
	}

	return (
		<>
			<div key={props.timerSettings.id} className={styles.container}>
				<div className={styles.visual}>{timerState.visualTime}</div>
				<div className={styles.containerButtons}>
					<IconButton
						styles={{
							icon: { fontSize: '1.4rem' },
						}}
						iconProps={{
							iconName: timerState.isPaused
								? 'Play'
								: timerState.remainingSeconds > 0
								? 'Pause'
								: 'Refresh',
						}}
						onClick={() => {
							if (timerState.remainingSeconds === 0) {
								// time elapsed > refresh (+1 for visuals :-)
								setTimerState({
									...timerState,
									remainingSeconds:
										timerState.totalSeconds + 1,
								});
							} else {
								// timer paused > restart
								setTimerState({
									...timerState,
									isPaused: !timerState.isPaused,
								});
							}
						}}
					/>
					<IconButton
						styles={{
							icon: { fontSize: '1.4rem' },
						}}
						iconProps={{ iconName: 'Delete' }}
						onClick={() => {
							// handle local timer
							setTimerState({
								...timerState,
								isDeleted: true,
							});
							// call global timer controller delete method
							props.deleteTimer(props.timerSettings.id);
						}}
					/>
				</div>
			</div>
		</>
	);
}
