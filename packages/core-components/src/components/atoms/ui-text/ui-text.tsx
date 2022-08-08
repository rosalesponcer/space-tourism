import { Component, h, Host, Prop } from '@stencil/core';

import { TextSize } from 'packages/core-components/src/global/types/TextSize';

@Component({
	tag: 'ui-text',
	styleUrl: 'ui-text.scss',
})
export class AtomsUiText {
	@Prop() size: TextSize = 'p';
	@Prop() type: 'block' | 'inline' = 'inline';
	@Prop() weight: 'normal' | 'bold' = 'normal';
	@Prop() color: 'white' | 'purple' | 'dark' = 'dark';

	render() {
		return (
			<Host class={this.getClasses()}>
				<slot></slot>
			</Host>
		);
	}

	getClasses() {
		return {
			['text']: true,
			[`text--size-${this.size}`]: true,
			[`text--type-${this.type}`]: true,
			[`text--weight-${this.weight}`]: true,
			[`text--color-${this.color}`]: true,
		};
	}
}
