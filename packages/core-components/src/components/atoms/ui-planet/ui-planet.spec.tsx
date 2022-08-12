import { newSpecPage } from '@stencil/core/testing';
import { UiPlanet } from './ui-planet';

describe('ui-planet', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiPlanet],
			html: '<ui-planet></ui-planet>',
		});
		expect(root).toEqualHtml(`
      <ui-planet>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-planet>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiPlanet],
			html: `<ui-planet first="Stencil" last="'Don't call me a framework' JS"></ui-planet>`,
		});
		expect(root).toEqualHtml(`
      <ui-planet first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-planet>
    `);
	});
});
