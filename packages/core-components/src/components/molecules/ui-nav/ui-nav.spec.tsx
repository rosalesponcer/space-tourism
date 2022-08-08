import { newSpecPage } from '@stencil/core/testing';
import { UiNav } from './ui-nav';

describe('ui-nav', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiNav],
			html: '<ui-nav></ui-nav>',
		});
		expect(root).toEqualHtml(`
      <ui-nav>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-nav>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiNav],
			html: `<ui-nav first="Stencil" last="'Don't call me a framework' JS"></ui-nav>`,
		});
		expect(root).toEqualHtml(`
      <ui-nav first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-nav>
    `);
	});
});
