import { newSpecPage } from '@stencil/core/testing';
import { UiHamburgerButton } from './ui-hamburger-button';

describe('ui-hamburger-button', () => {
	it('renders', async () => {
		const { root } = await newSpecPage({
			components: [UiHamburgerButton],
			html: '<ui-hamburger-button></ui-hamburger-button>',
		});
		expect(root).toEqualHtml(`
      <ui-hamburger-button>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </ui-hamburger-button>
    `);
	});

	it('renders with values', async () => {
		const { root } = await newSpecPage({
			components: [UiHamburgerButton],
			html: `<ui-hamburger-button first="Stencil" last="'Don't call me a framework' JS"></ui-hamburger-button>`,
		});
		expect(root).toEqualHtml(`
      <ui-hamburger-button first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </ui-hamburger-button>
    `);
	});
});
