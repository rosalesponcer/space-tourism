import { Component, h, Host } from '@stencil/core';

@Component({
	tag: 'ui-header',
	styleUrl: 'ui-header.scss',
	shadow: true,
})
export class UiHeader {
	render() {
		return (
			<Host>
				<header class={'header'}>
					<ui-logo class={'header__logo'}></ui-logo>
					<ui-nav class={'header__nav'}></ui-nav>
				</header>
			</Host>
		);
	}
}
