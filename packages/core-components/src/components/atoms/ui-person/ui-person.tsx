import { Component, getAssetPath, h, Host, Prop } from '@stencil/core';

@Component({
	tag: 'ui-person',
	styleUrl: 'ui-person.scss',
	shadow: true,
})
export class UiPerson {
	@Prop() personImg: string;

	render() {
		if (!this.personImg) return;

		const url = `/assets/crew/${this.personImg}`;

		const personImg = getAssetPath(url);

		return (
			<Host>
				<div class="person-img">
					<img
						src={personImg}
						alt="person"
						class="person-img__img"
						draggable={false}
					/>
				</div>
			</Host>
		);
	}
}
