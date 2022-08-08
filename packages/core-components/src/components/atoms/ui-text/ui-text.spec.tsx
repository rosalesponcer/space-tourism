import { newSpecPage } from '@stencil/core/testing';
import { AtomsUiText } from './atoms/ui-text';

describe('atoms/ui-text', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [AtomsUiText],
      html: '<atoms/ui-text></atoms/ui-text>',
    });
    expect(root).toEqualHtml(`
      <atoms/ui-text>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </atoms/ui-text>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [AtomsUiText],
      html: `<atoms/ui-text first="Stencil" last="'Don't call me a framework' JS"></atoms/ui-text>`,
    });
    expect(root).toEqualHtml(`
      <atoms/ui-text first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </atoms/ui-text>
    `);
  });
});
