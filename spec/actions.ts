import { browser, $, $$, element, by, protractor } from "protractor";

export async function select(idx, item) {

    let until = protractor.ExpectedConditions;
    let itemToSelect = await element(by.xpath(`//li[text()="${item}"]`))//

    await $$('span.k-select').get(idx).click();
    await browser.wait(until.elementToBeClickable(itemToSelect), 5000);				 
    await browser.sleep(100);
	await itemToSelect.click();
	await browser.sleep(100);
	
}

export async function getSelectedItem(item, attribute) {

    let until = protractor.ExpectedConditions;
    let itemToSelect = item;

    await browser.wait(until.presenceOf(itemToSelect), 5000);
    return itemToSelect.getAttribute(attribute);
}