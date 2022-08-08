import { newSpecPage } from '@stencil/core/testing';
import { UiHeader } from './ui-header';

describe('ui-header', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiHeader],
			html: '<ui-header></ui-header>',
		});
		expect(root).toEqualHtml(`
      <ui-header>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-header>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiHeader],
			html: `<ui-header first="Stencil" last="'Don't call me a framework' JS"></ui-header>`,
		});
		expect(root).toEqualHtml(`
      <ui-header first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-header>
    `);
	});
});
