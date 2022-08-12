import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
	tag: 'ui-planet-tab',
	styleUrl: 'ui-planet-tab.scss',
	shadow: true,
})
export class UiPlanetTab {
	@Prop() planetKeys: string[] = [];
	@Prop() currentKey: string;

	@Event() clickTab: EventEmitter<string>;

	clickTabHandler(key: string) {
		this.clickTab.emit(key);
	}

	getPlanets() {
		return this.planetKeys.map((planet) => {
			return (
				<ui-nav-item
					name={planet.toUpperCase()}
					onlyBottom={true}
					navActive={this.currentKey === planet}
					center
					onClick={() => this.clickTabHandler(planet)}
				></ui-nav-item>
			);
		});
	}

	render() {
		return (
			<Host>
				<div class="planet-tab">{this.getPlanets()}</div>
			</Host>
		);
	}
}
