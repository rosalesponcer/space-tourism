import { newSpecPage } from '@stencil/core/testing';
import { UiCrewSlider } from './ui-crew-slider';

describe('ui-crew-slider', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiCrewSlider],
			html: '<ui-crew-slider></ui-crew-slider>',
		});
		expect(root).toEqualHtml(`
      <ui-crew-slider>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-crew-slider>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiCrewSlider],
			html: `<ui-crew-slider first="Stencil" last="'Don't call me a framework' JS"></ui-crew-slider>`,
		});
		expect(root).toEqualHtml(`
      <ui-crew-slider first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-crew-slider>
    `);
	});
});
