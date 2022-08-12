import { Component, h, Host } from '@stencil/core';

@Component({
	tag: 'ui-main-button',
	styleUrl: 'ui-main-button.scss',
	shadow: true,
})
export class UiMainButton {
	render() {
		return (
			<Host>
				<div class={'ui-main-button'}>
					<button class={'ui-main-button__button'}>
						<ui-text size="h4">EXPLORE</ui-text>
					</button>
					<div class={'ui-main-button__shadow'}></div>
				</div>
			</Host>
		);
	}
}
