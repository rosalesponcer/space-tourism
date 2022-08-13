import { Component, h, Host, State } from '@stencil/core';
import { PERSON_SLIDER_CONFIG } from 'packages/core-components/src/global/config/person-slider-config';
import { Person } from 'packages/core-components/src/global/interfaces/Person';

@Component({
	tag: 'ui-crew-slider',
	styleUrl: 'ui-crew-slider.scss',
	shadow: true,
})
export class UiCrewSlider {
	@State() currentPerson: Person;
	crew = PERSON_SLIDER_CONFIG;
	crewKeys: string[] = [];

	constructor() {
		this.currentPerson = this.crew.get('douglas');

		this.crewKeys = [...this.crew.keys()];
	}

	chagePerson(personKey: string) {
		this.currentPerson = this.crew.get(personKey);
		console.log(this.currentPerson);
	}

	render() {
		return (
			<Host>
				<div class="crew-slider">
					<div class="planet-slider__column">
						<ui-person-slider
							currentPerson={this.currentPerson}
							crewKeys={this.crewKeys}
							onChangePerson={({ detail }) => {
								this.chagePerson(detail);
							}}
						></ui-person-slider>
					</div>
					<div class="planet-slider__column">
						<ui-text
							size="cf1"
							color="white"
							type="block"
							style={{ opacity: '0.5' }}
							class="crew-slider__subtitle"
						>
							{this.currentPerson.role.toUpperCase()}
						</ui-text>

						<ui-text
							type="block"
							size="cf"
							color="white"
							class="crew-slider__name"
						>
							{this.currentPerson.name.toUpperCase()}
						</ui-text>

						<ui-text
							color="purple"
							type="block"
							class="crew-slider__desc"
						>
							{this.currentPerson.desc}
						</ui-text>
					</div>
				</div>
			</Host>
		);
	}
}
