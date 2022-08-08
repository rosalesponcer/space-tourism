import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

@Component({
	tag: 'ui-hamburger-button',
	styleUrl: 'ui-hamburger-button.scss',
	shadow: true,
})
export class UiHamburgerButton {
	@Prop() first: string;

	@State() active: boolean = false;

	@Event() clickActive: EventEmitter<boolean>;

	changeButton() {
		this.active = !this.active;
		this.clickActiveHandler(this.active);
	}

	clickActiveHandler(value: boolean) {
		this.clickActive.emit(value);
	}

	render() {
		return (
			<button
				class={'hamburger-button'}
				onClick={() => this.changeButton()}
			>
				<div
					class={{ ['one']: true, ['one--active']: this.active }}
				></div>
				<div
					class={{ ['two']: true, ['two--active']: this.active }}
				></div>
				<div
					class={{ ['three']: true, ['three--active']: this.active }}
				></div>
			</button>
		);
	}
}
