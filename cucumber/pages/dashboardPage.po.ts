import { browser, by, element, until } from 'protractor';
import { BasePage } from './basePage.po';

export class DashboardPage implements BasePage {
  url: string = 'http://localhost:4200/dashboard';

  public getUrl() {
    return this.url;
  }

  public getRootElement() {
    return element(by.id('dashboardPage'));
  }

  public getTopHeroes() {
    return element(by.id('topHeroesGrid'));
  }

  public getHeroButtonByName(heroName: string) {
    return element(by.id(heroName + 'Button'));
  }

  public getSearchRootElement() {
    return element(by.id('search-component'));
  }

  public getSearchInput() {
    return element(by.id('search-box'));
  }

  public getSearchHeroButtonByName(heroName: string) {
    return element(by.id(heroName + 'SearchButton'));
  }

  public getSearchHeroResult() {
    return element(by.id('heroSearchResult'));
  }
}
export const dashboardPage = new DashboardPage();
