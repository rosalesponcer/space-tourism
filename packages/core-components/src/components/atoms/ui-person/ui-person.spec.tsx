import { newSpecPage } from '@stencil/core/testing';
import { UiPerson } from './ui-person';

describe('ui-person', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiPerson],
			html: '<ui-person></ui-person>',
		});
		expect(root).toEqualHtml(`
      <ui-person>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-person>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiPerson],
			html: `<ui-person first="Stencil" last="'Don't call me a framework' JS"></ui-person>`,
		});
		expect(root).toEqualHtml(`
      <ui-person first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-person>
    `);
	});
});
