import { Component, h, Host, Prop } from '@stencil/core';

@Component({
	tag: 'ui-nav-item',
	styleUrl: 'ui-nav-item.scss',
})
export class MoleculesUiNavItem {
	@Prop() navNumber: string = '';
	@Prop() name: string = '';
	@Prop() center: boolean = false;
	@Prop() onlyBottom: boolean = false;
	@Prop() navActive: boolean = false;

	hasNumber() {
		if (!this.navNumber) return;

		return (
			<ui-text
				size={'nav'}
				weight={'bold'}
				class={'nav-item__number'}
				color={'white'}
			>
				{this.navNumber}
			</ui-text>
		);
	}

	render() {
		return (
			<Host>
				<div
					class={{
						'nav-item': true,
						'nav-item--center': this.center,
						'nav-item--bottom': this.onlyBottom,
						'nav-item--active': this.navActive,
					}}
				>
					{this.hasNumber()}
					<ui-text size={'nav'} color={'white'}>
						{this.name.toUpperCase()}
					</ui-text>
				</div>
			</Host>
		);
	}
}
