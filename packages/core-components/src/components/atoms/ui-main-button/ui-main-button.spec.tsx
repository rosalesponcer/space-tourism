import { newSpecPage } from '@stencil/core/testing';
import { UiMainButton } from './ui-main-button';

describe('ui-main-button', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiMainButton],
			html: '<ui-main-button></ui-main-button>',
		});
		expect(root).toEqualHtml(`
      <ui-main-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-main-button>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiMainButton],
			html: `<ui-main-button first="Stencil" last="'Don't call me a framework' JS"></ui-main-button>`,
		});
		expect(root).toEqualHtml(`
      <ui-main-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-main-button>
    `);
	});
});
