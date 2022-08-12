import { newSpecPage } from '@stencil/core/testing';
import { UiPlanetSlider } from './ui-planet-slider';

describe('ui-planet-slider', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiPlanetSlider],
			html: '<ui-planet-slider></ui-planet-slider>',
		});
		expect(root).toEqualHtml(`
      <ui-planet-slider>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-planet-slider>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiPlanetSlider],
			html: `<ui-planet-slider first="Stencil" last="'Don't call me a framework' JS"></ui-planet-slider>`,
		});
		expect(root).toEqualHtml(`
      <ui-planet-slider first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-planet-slider>
    `);
	});
});
