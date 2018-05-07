import {by, element} from "protractor/built/index";

module.export = {
  addToHeroName: function(text) {
    let input = element(by.css('input'));
    return input.sendKeys(text);
  },

  expectHeading: function(hLevel, expectedText) {
    let hTag = `h${hLevel}`;
    let hText = element(by.css(hTag)).getText();
    expect(hText).toEqual(expectedText, hTag);
  },

  getHeroAEltById: function(id) {
    let spanForId = element(by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(by.xpath('..'));
  }

  getHeroLiEltById: function(id) {
    let spanForId = element(by.cssContainingText('li span.badge', id.toString()));
    return spanForId.element(by.xpath('../..'));
  }

  async function toHeroArray(allHeroes) {
    let promisedHeroes = await allHeroes.map(Hero.fromLi);
    return Promise.all(promisedHeroes);
  }

}

