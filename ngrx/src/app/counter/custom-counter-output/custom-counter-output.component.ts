import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { changeChannelName, customIncrement } from '../state/counter.actions';
import { getChannelName } from '../state/counter.selectors';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.store';

@Component({
	selector: 'app-custom-counter-output',
	templateUrl: './custom-counter-output.component.html',
	styleUrls: ['./custom-counter-output.component.css'],
})
export class CustomCounterOutputComponent {
	value: number;
	channelName$: Observable<string>;

	constructor(private store: Store<AppState>) {}

	ngOnInit() {
		this.channelName$ = this.store.select(getChannelName);
	}

	onAdd() {
		this.store.dispatch(customIncrement({ value: +this.value }));
	}

	onChangeChannelName() {
		this.store.dispatch(changeChannelName());
	}
}
