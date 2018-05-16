import { browser, by, element, until } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class InitialPage {
  private static url: string = 'http://localhost:4200/';

  public static getUrl() {
    return this.url;
  }

  public static getRootElement() {
    return element(by.id('initialPage'));
  }

  public static getApplicationName() {
    return element(by.id('initialTitle')).getText();
  }

  public static getDashboardButton() {
    return element(by.id('linkDashBoard'));
  }

  public static getHeroesButton() {
    return element(by.id('linkHeroes'));
  }
}
