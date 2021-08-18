import { browser, $, $$, element, by, protractor, ExpectedConditions } from "protractor";
import { sendFilledForm } from "./actions";

describe("Wyszukiwarka", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function(){
    await browser.get(url);
  });

  it("powinna mieć ustawioną domyślną szerokość opon", async function () {
    const width = await $('#opona-szerokosc').getAttribute("value");
    expect(width).toEqual("205");
  });

  it("powinna mieć ustawioną domyślną wysokość opon", async function () {
    const profile = await $('#opona-profil').getAttribute("value");
    expect(profile).toEqual("55");
  });

  it("powinna mieć ustawiony domyślny promień opon", async function () {
    const radius = await $('#opona-srednica').getAttribute('value')
    expect(radius).toEqual('16');
  });

  it("powinna wyświetlić listę opon po naciśnięciu przycisku 'Szukaj opon'", async function () {
    await $('#btnSzukajOponyWgRozmiar').click();
    const header = await $('span.opony-small-top-label-opony').getText();
    expect(header).toEqual('Opony');
  });

  it("powinna umożliwiać wyszukiwanie opon dla samochodów ciężarowych", async function () {
    const width = "225";
    const height = "60";
    const radius = "16";
    await $$('ul.WyborOponPrzyciski-Lista li').get(1).click();
    await sendFilledForm(width, height, radius);
    const header = await $('span.opony-small-top-label-opony').getText();
    expect(header).toEqual('Opony');
  });

  it("powinna  umożliwiać wyszukiwanie opon dla samochodów terenowych", async function () {
    const width = "225";
    const height = "60";
    const radius = "17";
    await $$('ul.WyborOponPrzyciski-Lista li').get(2).click();
    await sendFilledForm(width, height, radius);
    const header = await $('span.opony-small-top-label-opony').getText();
    expect(header).toEqual('Opony');
  });

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    await $$('span.k-select').get(0).click();
    await browser.sleep(1000);
    await element(by.xpath('//li[text()="215"]')).click();
    await browser.sleep(1000);
    const width = await $('#opona-szerokosc').getAttribute("value");
    expect(width).toEqual("215");
  });

  async function setWidth(width){
    await $$('span.k-select').get(0).click();
    await browser.sleep(500);
    await element(by.xpath(`//li[text()="${width}"]`)).click();
  }

  it("umożliwiać zmianę domyślnej szerokości opon", async function () {
    let newWidth = "225";
    await setWidth(newWidth)
    const width = await $('#opona-szerokosc').getAttribute("value");
    expect(width).toEqual(newWidth);
  });

});