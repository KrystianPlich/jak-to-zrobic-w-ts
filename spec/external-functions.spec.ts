import { browser, $, $$, element, by, protractor } from "protractor";
import { select , getSelectedItem} from "./actions";

describe("Wyszukiwarka", function () {

  const url = "https://bestdrive.webshop.pl/opona/ustawserwis?w=Mazowieckie&k=Navigator&returnUrl=";

  beforeEach(async function(){
    await browser.get(url);
  });

  it("umożliwiać zmianę domyślnej szerokości opon", async function () {
    const newWidth = "225";
    await select(0, newWidth);
    const currentWidth = await $('#opona-szerokosc').getAttribute("value");
    expect(currentWidth).toEqual(newWidth);
  });

  
  //Zastąp bezpośrednie odwołanie do funckji getAttribute odwołaniem do funkcji w zewnętrznym pliku
  
  it("umożliwiać zmianę domyślnej szerokości opon", async function () {
    const newWidth = "225";
    await select(0, newWidth)
    const currentWidth = getSelectedItem($('#opona-szerokosc'), 'value');
    expect(currentWidth).toEqual(newWidth);
  });

});