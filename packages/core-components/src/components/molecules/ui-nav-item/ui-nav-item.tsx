import { Component, h, Prop } from '@stencil/core';

@Component({
	tag: 'ui-nav-item',
	styleUrl: 'ui-nav-item.scss',
	shadow: true,
})
export class MoleculesUiNavItem {
	@Prop() navNumber: string = '';
	@Prop() name: string = '';

	render() {
		return (
			<div class={'nav-item'}>
				<ui-text
					size={'nav'}
					weight={'bold'}
					class={'nav-item__number'}
					color={'white'}
				>
					{this.navNumber}
				</ui-text>
				<ui-text size={'nav'} color={'white'}>
					{this.name.toUpperCase()}
				</ui-text>
			</div>
		);
	}
}
