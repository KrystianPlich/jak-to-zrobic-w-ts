import { browser, $, $$, element, by, protractor } from "protractor";
import { SearchComponent } from "./components/search";
import { getSelectedItem } from "./actions"

describe("Wyszukiwarka", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";
  const searchComponent = new SearchComponent();

  beforeEach(async function(){
    await browser.get(url);
  });

  it("powinna umożliwiać zmianę domyślnej szerokości opon", async function () {
    const newWidth = "225";
    await searchComponent.selectWidth( newWidth);
    const currentWidth = getSelectedItem($('#opona-szerokosc'), 'value');
    expect(await currentWidth).toEqual(newWidth);
  });

});