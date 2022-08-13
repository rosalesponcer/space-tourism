import { newSpecPage } from '@stencil/core/testing';
import { UiPersonSlider } from './ui-person-slider';

describe('ui-person-slider', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiPersonSlider],
			html: '<ui-person-slider></ui-person-slider>',
		});
		expect(root).toEqualHtml(`
      <ui-person-slider>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-person-slider>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiPersonSlider],
			html: `<ui-person-slider first="Stencil" last="'Don't call me a framework' JS"></ui-person-slider>`,
		});
		expect(root).toEqualHtml(`
      <ui-person-slider first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-person-slider>
    `);
	});
});
