import { browser, $, $$, element, by, protractor, ElementFinder } from "protractor";

let until = protractor.ExpectedConditions;

export async function select(idx, item) {

    let itemToSelect = await element(by.xpath(`//li[text()="${item}"]`))//

    await $$('span.k-select').get(idx).click();
    await browser.wait(until.elementToBeClickable(itemToSelect), 5000);				 
    await browser.sleep(100);
	await itemToSelect.click();
	await browser.sleep(100);
	
}

export async function getSelectedItem(item: ElementFinder, attribute: string) {

    await browser.wait(until.presenceOf(item), 5000);
    return item.getAttribute(attribute);
}


async function selectAll(width: string, height: string, radius: string) {
    const dimensions = [width, height, radius];
    let itemToSelect: ElementFinder;
    for (let i=0;i<dimensions.length;i++) {
        itemToSelect = await $$('input.k-input').get(i)
        await fillItem(itemToSelect, dimensions[i]);
    }
}

async function fillItem(item: ElementFinder, value: string) {
    await browser.wait(until.elementToBeClickable(item), 2000);
    await item.click();
    await item.clear();
    await item.sendKeys(value);
    await $('h1#WyborOpon-Tytul').click()
}

export async function sendFilledForm(width: string, height: string, radius: string) {
    await selectAll(width,height,radius);
    await browser.wait(until.elementToBeClickable($('#btnSzukajOponyWgRozmiar')), 2000);
    await $('#btnSzukajOponyWgRozmiar').click();``
}