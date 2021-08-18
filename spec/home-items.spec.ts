import { browser, $, $$, element, by, protractor, ExpectedConditions } from "protractor";

const EC = ExpectedConditions;

describe("Strona główna bestdrive", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeAll(async function(){
    await browser.get(url);
  });

  it("powinna mieć tytuł: Bestdrive - Opony online - bestdrive.webshop.pl", async function () {
    const title = await browser.getTitle();
    expect(title).toMatch('Bestdrive - Opony online - bestdrive.webshop.pl');
  });

  it("powinna wyświetlać nazwę wybranego serwisu", async function() {
    const serviceName = await $('.serwis-nazwa').getText();
    expect(serviceName).toEqual('Navigator');
  });

  it("powinna domyślnie wyświetlać wyszukiwarkę opon wg. rozmiaru", async function() {
    await browser.wait(EC.presenceOf($('div[ID=WyborOpon]')), 2000);
    const expectedSearch = "Wyszukaj opony wg rozmiaru";
    const defaultSearch = await $('#WyborOpon h1');
    expect(defaultSearch.getText()).toEqual(expectedSearch);
  });

  it("powinna posiadac menu zawierajace: 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU,'PROMOCJE','KOSZYK (0)'", async function() {
    const nav = await $$('ul.nav li').getText();
    expect(nav).toEqual([ 'OPONY WG ROZMIARU', 'OPONY WG POJAZDU', 'PROMOCJE', 'KOSZYK (0)', '' ]);
  });

  it("powinna posiadac menu z pierwszym elementem 'OPONY WG ROZMIARU'", async function() {
    const nav = await $$('ul.nav li').get(0).getText();
    expect(nav).toEqual('OPONY WG ROZMIARU');
  });

  it("powinna posiadac stopkę z linkami do ...", async function() {
    const expectedHref = ["http://bestdrive.pl/oferta/o-nas",
      "https://bestdrive.webshop.pl/home/kontakt", 
      "https://bestdrive.webshop.pl/regulamin", 
      "https://bestdrive.webshop.pl/jak-kupowac", 
      "http://blog.bestdrive.pl/",
      "https://bestdrive.webshop.pl/Home/Uwagi",
      "https://www.continental-opony.pl/",
      "https://www.uniroyal.pl/", 
      "https://www.barum-opony.pl/"];
    const footerItems = await $$('footer a').map(item => item.getAttribute('href'));
    expect(footerItems).toEqual(expectedHref);
  });

});