import { newSpecPage } from '@stencil/core/testing';
import { UiPlanetTab } from './ui-planet-tab';

describe('ui-planet-tab', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiPlanetTab],
			html: '<ui-planet-tab></ui-planet-tab>',
		});
		expect(root).toEqualHtml(`
      <ui-planet-tab>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-planet-tab>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiPlanetTab],
			html: `<ui-planet-tab first="Stencil" last="'Don't call me a framework' JS"></ui-planet-tab>`,
		});
		expect(root).toEqualHtml(`
      <ui-planet-tab first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-planet-tab>
    `);
	});
});
