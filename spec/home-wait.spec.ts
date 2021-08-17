import { browser, $, $$, element, by, protractor } from "protractor";

describe("Wyszukiwarka", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function(){
    await browser.get(url);
  });

  async function setWidth(width){

    var until = protractor.ExpectedConditions;
    let itemToSelect = element(by.xpath(`//li[text()="${width}"]`))
    await $$('span.k-select').get(0).click();
    await browser.wait(until.elementToBeClickable(itemToSelect), 5000);				 	
    await itemToSelect.click();

  }

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {

    let newWidth = "225";

    await setWidth(newWidth);
    const width = $('#opona-szerokosc').getAttribute("value");
    expect(await width).toEqual(newWidth);
    
  });

});