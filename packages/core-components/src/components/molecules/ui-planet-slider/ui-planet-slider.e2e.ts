import { newE2EPage } from '@stencil/core/testing';

describe('ui-planet-slider', () => {
	it('renders', async () => {
		const page = await newE2EPage();

		await page.setContent('<ui-planet-slider></ui-planet-slider>');
		const element = await page.find('ui-planet-slider');
		expect(element).toHaveClass('hydrated');
	});

	it('renders changes to the name data', async () => {
		const page = await newE2EPage();

		await page.setContent('<ui-planet-slider></ui-planet-slider>');
		const component = await page.find('ui-planet-slider');
		const element = await page.find('ui-planet-slider >>> div');
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
