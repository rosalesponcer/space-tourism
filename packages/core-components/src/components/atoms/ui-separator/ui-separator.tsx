import { Component, h, Host } from '@stencil/core';

@Component({
	tag: 'ui-separator',
	styleUrl: 'ui-separator.scss',
	shadow: true,
})
export class UiSeparator {
	render() {
		return <Host></Host>;
	}
}
