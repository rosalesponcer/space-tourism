import { newSpecPage } from '@stencil/core/testing';
import { UiSeparator } from './ui-separator';

describe('ui-separator', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiSeparator],
			html: '<ui-separator></ui-separator>',
		});
		expect(root).toEqualHtml(`
      <ui-separator>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-separator>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiSeparator],
			html: `<ui-separator first="Stencil" last="'Don't call me a framework' JS"></ui-separator>`,
		});
		expect(root).toEqualHtml(`
      <ui-separator first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-separator>
    `);
	});
});
