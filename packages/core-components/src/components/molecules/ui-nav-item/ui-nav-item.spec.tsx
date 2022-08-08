import { newSpecPage } from '@stencil/core/testing';
import { MoleculesUiNavItem } from './molecules/ui-nav-item';

describe('molecules/ui-nav-item', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [MoleculesUiNavItem],
			html: '<molecules/ui-nav-item></molecules/ui-nav-item>',
		});
		expect(root).toEqualHtml(`
      <molecules/ui-nav-item>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </molecules/ui-nav-item>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [MoleculesUiNavItem],
			html: `<molecules/ui-nav-item first="Stencil" last="'Don't call me a framework' JS"></molecules/ui-nav-item>`,
		});
		expect(root).toEqualHtml(`
      <molecules/ui-nav-item first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </molecules/ui-nav-item>
    `);
	});
});
