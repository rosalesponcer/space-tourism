import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import { Person } from 'packages/core-components/src/global/interfaces/Person';

@Component({
	tag: 'ui-person-slider',
	styleUrl: 'ui-person-slider.scss',
	shadow: true,
})
export class UiPersonSlider {
	@Prop() crewKeys: string[] = [];
	@Prop() currentPerson: Person;

	@Event() changePerson: EventEmitter<string>;

	changePersonHandler(personKey: string) {
		this.changePerson.emit(personKey);
	}

	getDots() {
		return this.crewKeys?.map((personKey) => (
			<div
				class={{
					dots__item: true,
					'dots__item--active': this.currentPerson.key === personKey,
				}}
				onClick={() => this.changePersonHandler(personKey)}
			></div>
		));
	}

	render() {
		return (
			<Host>
				<ui-person personImg={this.currentPerson.img}></ui-person>
				<ui-separator></ui-separator>
				<div class="dots">{this.getDots()}</div>
			</Host>
		);
	}
}
