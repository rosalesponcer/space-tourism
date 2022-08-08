import { newE2EPage } from '@stencil/core/testing';

describe('molecules/ui-nav-item', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent(
			'<molecules/ui-nav-item></molecules/ui-nav-item>'
		);
		const element = await page.find('molecules/ui-nav-item');
		expect(element).toHaveClass('hydrated');
	});

	it('renders changes to the name data', async () => {
		const page = await newE2EPage();

		await page.setContent(
			'<molecules/ui-nav-item></molecules/ui-nav-item>'
		);
		const component = await page.find('molecules/ui-nav-item');
		const element = await page.find('molecules/ui-nav-item >>> div');
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
