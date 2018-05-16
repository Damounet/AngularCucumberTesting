import { browser, by, element, until } from 'protractor';

export class HeroesPage {
  //private static abstract getProps
  private static url: string = 'http://localhost:4200/heroes';

  public static getUrl() {
    return this.url;
  }

  public static getRootElement() {
    return element(by.id('heroesPage'));
  }

  public static getHeroButtonByName(heroName: string) {
    return element(by.id(heroName + 'Button'));
  }

  public static getAddHeroInput() {
    return element(by.id('addHeroInput'));
  }

  public static getAddButton() {
    return element(by.id('addButton'));
  }

  public static getDeleteButtonByName(heroName: string) {
    return element(by.id(heroName + 'DeleteButton'));
  }

  /* public static getTopHeroes() {
    return element(by.id('topHeroesGrid'));
  }
  
  public static getSearchRootElement() {
    return element(by.id('search-component'));
  }

  public static getSearchInput() {
    return element(by.id('search-box'));
  }

  public static getSearchHeroButtonByName(heroName: string) {
    return element(by.id(heroName + 'SearchButton'));
  } */
}
