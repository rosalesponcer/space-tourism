import { newE2EPage } from '@stencil/core/testing';

describe('atoms/ui-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<atoms/ui-text></atoms/ui-text>');
    const element = await page.find('atoms/ui-text');
    expect(element).toHaveClass('hydrated');
  });

  it('renders changes to the name data', async () => {
    const page = await newE2EPage();

    await page.setContent('<atoms/ui-text></atoms/ui-text>');
    const component = await page.find('atoms/ui-text');
    const element = await page.find('atoms/ui-text >>> div');
    expect(element.textContent).toEqual(`Hello, World! I'm `);

    component.setProperty('first', 'James');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James`);

    component.setProperty('last', 'Quincy');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

    component.setProperty('middle', 'Earl');
    await page.waitForChanges();
    expect(element.textContent).toEqual(`Hello, World! I'm James Earl Quincy`);
  });
});
