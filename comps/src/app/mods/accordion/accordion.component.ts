import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-accordion',
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
	@Input() items: any = [];
	openedIndex = 0;

	onClick(i: number) {
		if (i === this.openedIndex) {
			this.openedIndex = -1;
		} else {
			this.openedIndex = i;
		}
	}
}
