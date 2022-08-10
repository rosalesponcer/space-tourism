import { Component, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
	tag: 'ui-header',
	styleUrl: 'ui-header.scss',
	shadow: true,
})
export class UiHeader {
	@Event() clickLogo: EventEmitter<null>;

	clickHandler() {
		this.clickLogo.emit();
	}

	render() {
		return (
			<Host>
				<header class={'header'}>
					<ui-logo
						class={'header__logo'}
						onClick={() => this.clickHandler()}
					></ui-logo>
					<ui-nav class={'header__nav'}></ui-nav>
				</header>
			</Host>
		);
	}
}
