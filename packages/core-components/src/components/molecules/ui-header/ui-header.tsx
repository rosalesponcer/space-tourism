import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
	tag: 'ui-header',
	styleUrl: 'ui-header.scss',
	shadow: true,
})
export class UiHeader {
	@Event() clickNavigate: EventEmitter<string>;
	@Prop() currentRoute: string;

	clickNavigateHandler(path: string) {
		if (this.currentRoute === path) return;

		console.log('clickNavigateHandler');

		this.clickNavigate.emit(path);
	}

	render() {
		return (
			<Host>
				<header class={'header'}>
					<ui-logo
						class={'header__logo'}
						onClick={() => this.clickNavigateHandler('/')}
					></ui-logo>
					<ui-nav
						currentRoute={this.currentRoute}
						class={'header__nav'}
						onClickNav={({ detail }) =>
							this.clickNavigateHandler(detail)
						}
					></ui-nav>
				</header>
			</Host>
		);
	}
}
