import { Component, Event, EventEmitter, h, Prop, State } from '@stencil/core';

import { NAV_LIST } from './NavConfig';

@Component({
	tag: 'ui-nav',
	styleUrl: 'ui-nav.scss',
	shadow: true,
})
export class UiNav {
	@Prop() last: string;
	@Prop() navList = NAV_LIST;
	@Prop() currentRoute: string;

	@Event() clickNav: EventEmitter<string>;

	@State() inactive: boolean = false;

	clickHandler(path: string) {
		this.clickNav.emit(path);
	}

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
					{this.navList.map(({ number, name, path }) => {
						return (
							<ui-nav-item
								navNumber={number}
								name={name}
								navActive={this.currentRoute === path}
								onClick={() => this.clickHandler(path)}
							></ui-nav-item>
						);
					})}
				</div>
			</div>
		);
	}
}
