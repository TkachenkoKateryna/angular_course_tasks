import { createReducer, on } from '@ngrx/store';
import { initialState } from './counter.state';
import {
	changeChannelName,
	customIncrement,
	decrement,
	increment,
	reset,
} from './counter.actions';

const _counterReducer = createReducer(
	initialState,
	on(increment, (state) => ({ ...state, counter: state.counter + 1 })),
	on(decrement, (state) => ({ ...state, counter: state.counter - 1 })),
	on(reset, (state) => ({ ...state, counter: 0 })),
	on(customIncrement, (state, action) => {
		return { ...state, counter: state.counter + action.value };
	}),
	on(changeChannelName, (state) => ({
		...state,
		channelName: 'Modified channel',
	}))
);

export function counterReducer(state: any, action: any) {
	return _counterReducer(state, action);
}
