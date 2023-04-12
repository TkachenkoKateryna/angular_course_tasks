import { Component } from '@angular/core';

@Component({
	selector: 'app-collections-home',
	templateUrl: './collections-home.component.html',
	styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
	data = [
		{ name: 'James', age: 24, job: 'Designer', employed: true },
		{ name: 'Kate', age: 24, job: 'Engineer', employed: false },
		{ name: 'Julia', age: 25, job: 'Designer', employed: true },
	];
	headers = [
		{ key: 'name', label: 'Name' },
		{ key: 'age', label: 'Age' },
		{ key: 'job', label: 'Job' },
		{ key: 'employed', label: 'Has a job' },
	];
}
