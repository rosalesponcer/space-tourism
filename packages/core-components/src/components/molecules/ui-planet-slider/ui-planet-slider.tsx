import { Component, h, Host, State } from '@stencil/core';

import { PLANET_CONFIG } from 'packages/core-components/src/global/config/planet-tab-config';

import { Planet } from 'packages/core-components/src/global/interfaces/Planet';

@Component({
	tag: 'ui-planet-slider',
	styleUrl: 'ui-planet-slider.scss',
	shadow: true,
})
export class UiPlanetSlider {
	@State() currentPlanet: Planet = null;

	getKeys() {
		return [...PLANET_CONFIG.keys()];
	}

	clickTab(planetKey: string) {
		if (planetKey === this.currentPlanet.key) return;

		this.currentPlanet = PLANET_CONFIG.get(planetKey);
	}

	componentWillLoad() {
		this.currentPlanet = PLANET_CONFIG.get('moon');
	}

	render() {
		return (
			<Host>
				<div class="planet-slider">
					<div class="planet-slider__column">
						<ui-planet
							planetKey={this.currentPlanet.key}
						></ui-planet>
					</div>

					<div class="planet-slider__column">
						<ui-planet-tab
							class="planet-slider__tab"
							planetKeys={this.getKeys()}
							currentKey={this.currentPlanet.key}
							onClickTab={({ detail }) => this.clickTab(detail)}
						></ui-planet-tab>

						<ui-text size="h3" color="white" type="block">
							{this.currentPlanet.title.toUpperCase()}
						</ui-text>

						<ui-text class="planet-slider__desc" color="purple" type="block">
							{this.currentPlanet.desc}
						</ui-text>

						<ui-separator class="separator"></ui-separator>

						<div class="planet-slider__container">
							<ui-text
								class="planet-slider__label"
								color="purple"
								type="block"
								size="nav"
							>
								AVG. DISTANCE
							</ui-text>

							<ui-text
								class="planet-slider__value"
								color="white"
								size="sh1"
								type="block"
							>
								{this.currentPlanet.distance.toUpperCase()}
							</ui-text>

							<ui-text
								class="planet-slider__label"
								color="purple"
								type="block"
								size="nav"
							>
								EST. TRAVEL TIME
							</ui-text>

							<ui-text
								class="planet-slider__value"
								color="white"
								size="sh1"
								type="block"
							>
								{this.currentPlanet.travel.toUpperCase()}
							</ui-text>
						</div>
					</div>
				</div>
			</Host>
		);
	}
}
