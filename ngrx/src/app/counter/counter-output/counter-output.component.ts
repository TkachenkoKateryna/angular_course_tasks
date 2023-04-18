import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from '../state/counter.state';
import { Subscription, Observable } from 'rxjs';
import { getCounter } from '../state/counter.selectors';
import { AppState } from 'src/app/store/app.store';

@Component({
	selector: 'app-counter-output',
	templateUrl: './counter-output.component.html',
	styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
	counter$: Observable<number>;

	constructor(private store: Store<AppState>) {}

	ngOnInit(): void {
		this.counter$ = this.store.select(getCounter);
	}
}
