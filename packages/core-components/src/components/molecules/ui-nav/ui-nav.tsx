import { Component, h, Prop, State } from '@stencil/core';

import { NAV_LIST } from './NavConfig';

@Component({
	tag: 'ui-nav',
	styleUrl: 'ui-nav.scss',
	shadow: true,
})
export class UiNav {
	@Prop() last: string;

	@State() inactive: boolean = false;

	@Prop() navList = NAV_LIST;

	render() {
		return (
			<div class={{ ['nav']: true, ['nav--active']: !this.inactive }}>
				<div
					class={{
						['nav__background']: true,
						['nav__background--active']: !this.inactive,
					}}
				></div>
				<ui-hamburger-button
					class={'nav__button'}
					onClickActive={({ detail }) => (this.inactive = detail)}
				></ui-hamburger-button>

				<div
					class={{
						['nav__list']: true,
						['nav__list--active']: !this.inactive,
					}}
				>
					{this.navList.map(({ number, name }) => {
						return (
							<ui-nav-item
								navNumber={number}
								name={name}
							></ui-nav-item>
						);
					})}
				</div>
			</div>
		);
	}
}
