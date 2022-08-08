import { newSpecPage } from '@stencil/core/testing';
import { UiLogo } from './ui-logo';

describe('ui-logo', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiLogo],
			html: '<ui-logo></ui-logo>',
		});
		expect(root).toEqualHtml(`
      <ui-logo>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-logo>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiLogo],
			html: `<ui-logo first="Stencil" last="'Don't call me a framework' JS"></ui-logo>`,
		});
		expect(root).toEqualHtml(`
      <ui-logo first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-logo>
    `);
	});
});
