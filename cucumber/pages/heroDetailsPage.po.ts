import { browser, by, element, until } from 'protractor';

export class HeroDetailsPage {
  private static url: string = 'http://localhost:4200/detail';

  public static getUrl() {
    return this.url;
  }

  public static getRootElement() {
    return element(by.id('heroDetailsPage'));
  }

  public static getHeroNameInput() {
    return element(by.id('heroNameInput'));
  }

  public static getSaveButton() {
    return element(by.id('heroSaveButton'));
  }

  public static getBackButton() {
    return element(by.id('heroBackButton'));
  }
}
