import { Component, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
	selector: 'app-virtual',
	templateUrl: './virtual.component.html',
	styleUrls: [],
})
export class VirtualComponent {
	@ViewChild(CdkVirtualScrollViewport)
	scrollViewPort!: CdkVirtualScrollViewport;

	_people: string[] = Array(1000).fill('Person');

	ngOnInit(): void { }

	goFirst() {
		this.scrollViewPort.scrollToIndex(0);
	}

	goTo(idx: any) {
		this.scrollViewPort.scrollToIndex(idx);
	}

	goLast() {
		this.scrollViewPort.scrollToIndex(this._people.length - 1);
	}
}
