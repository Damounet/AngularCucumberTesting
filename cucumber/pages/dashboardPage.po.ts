import { browser, by, element, until } from 'protractor';

export class DashboardPage {
  private static url: string = 'http://localhost:4200/dashboard';

  public static getUrl() {
    return this.url;
  }

  public static getRootElement() {
    return element(by.id('dashboardPage'));
  }

  public static getTopHeroes() {
    return element(by.id('topHeroesGrid'));
  }

  public static getHeroButtonByName(heroName: string) {
    return element(by.id(heroName + 'Button'));
  }

  public static getSearchRootElement() {
    return element(by.id('search-component'));
  }

  public static getSearchInput() {
    return element(by.id('search-box'));
  }

  public static getSearchHeroButtonByName(heroName: string) {
    return element(by.id(heroName + 'SearchButton'));
  }

  public static getSearchHeroResult() {
    return element(by.id('heroSearchResult'));
  }
}
