import { Component, Element, getAssetPath, h, Prop } from '@stencil/core';
import { PLANET_IMG } from 'packages/core-components/src/global/config/planet-img-config';

@Component({
	tag: 'ui-planet',
	styleUrl: 'ui-planet.scss',
	// shadow: true,
})
export class UiPlanet {
	@Element() el: HTMLElement;
	@Prop() planetKey!: string;

	imgElement: HTMLElement;

	async componentShouldUpdate() {
		this.el?.querySelector('img')?.classList.add('planet-img__img--hidde');
	}

	async componentWillUpdate() {
		this.imgElement = this.el?.querySelector('img');

		await new Promise((r) => setTimeout(r, 310));
	}

	componentDidUpdate() {
		console.log('componentDidUpdate', this.imgElement.getAttribute('src'));

		setTimeout(() => {
			this.el
				?.querySelector('img')
				?.classList.remove('planet-img__img--hidde');
		}, 500);
	}

	render() {
		const url = `/assets/destination/${PLANET_IMG.get(this.planetKey)}`;
		const moon = getAssetPath(url);

		return (
			<div class="planet-img">
				<img
					src={moon}
					alt={`${this.planetKey} image`}
					class="planet-img__img"
					draggable={false}
				/>
			</div>
		);
	}
}
