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

  public static getHeroButtonById(heroId: number) {
    return element(by.id('heroButton' + heroId));
  }

  /*public static getApplicationName() {
    return element(by.id('initialTitle'));
  }

  public static getDashboardButton() {
    return element(by.id('linkDashBoard'));
  }

  public static getHeroesButton() {
    return element(by.id('linkHeroes'));
  }*/
}
