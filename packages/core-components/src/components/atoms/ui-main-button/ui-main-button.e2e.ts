import { newE2EPage } from '@stencil/core/testing';

describe('ui-main-button', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<ui-main-button></ui-main-button>');
		const element = await page.find('ui-main-button');
		expect(element).toHaveClass('hydrated');
	});

	it('renders changes to the name data', async () => {
		const page = await newE2EPage();

		await page.setContent('<ui-main-button></ui-main-button>');
		const component = await page.find('ui-main-button');
		const element = await page.find('ui-main-button >>> div');
		expect(element.textContent).toEqual(`Hello, World! I'm `);

		component.setProperty('first', 'James');
		await page.waitForChanges();
		expect(element.textContent).toEqual(`Hello, World! I'm James`);

		component.setProperty('last', 'Quincy');
		await page.waitForChanges();
		expect(element.textContent).toEqual(`Hello, World! I'm James Quincy`);

		component.setProperty('middle', 'Earl');
		await page.waitForChanges();
		expect(element.textContent).toEqual(
			`Hello, World! I'm James Earl Quincy`
		);
	});
});
