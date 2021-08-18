import { browser, $, $$, element, by, protractor, ElementFinder } from "protractor";

export async function select(idx, item) {

    let until = protractor.ExpectedConditions;
    let itemToSelect = await element(by.xpath(`//li[text()="${item}"]`))//

    await $$('span.k-select').get(idx).click();
    await browser.wait(until.elementToBeClickable(itemToSelect), 5000);				 
    await browser.sleep(100);
	await itemToSelect.click();
	await browser.sleep(100);
	
}

export async function getSelectedItem(item: ElementFinder, attribute: string) {

    let until = protractor.ExpectedConditions;

    await browser.wait(until.presenceOf(item), 5000);
    return item.getAttribute(attribute);
}

export async function selectAll(items: string[]) {

    let until = protractor.ExpectedConditions;
    let itemToSelect = await element(by.xpath(`//li[text()="${items[0]}"]`))

    await $$('span.k-select').get(0).click();
    await browser.wait(until.elementToBeClickable(itemToSelect), 5000);				 
    await browser.sleep(100);
	await itemToSelect.click();
	await browser.sleep(100);
    itemToSelect = await element(by.xpath(`//li[text()="${items[1]}"]`));
	await browser.wait(until.elementToBeClickable(itemToSelect), 5000);
    await browser.sleep(100);
	await itemToSelect.click();
	await browser.sleep(100);
    itemToSelect = await element(by.xpath(`//li[text()="${items[2]}"]`));
    await browser.wait(until.elementToBeClickable(itemToSelect), 5000);
    await browser.sleep(100);
	await itemToSelect.click();
	await browser.sleep(100);
}