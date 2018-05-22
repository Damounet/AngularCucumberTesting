import { browser, by, element, until } from 'protractor';
import { BasePage } from './basePage.po';
export class HeroDetailsPage implements BasePage {
  url: string = 'http://localhost:4200/detail';

  public getUrl() {
    return this.url;
  }

  public getRootElement() {
    return element(by.id('heroDetailsPage'));
  }

  public getHeroNameInput() {
    return element(by.id('heroNameInput'));
  }

  public getSaveButton() {
    return element(by.id('heroSaveButton'));
  }

  public getBackButton() {
    return element(by.id('heroBackButton'));
  }
}
export const heroDetailsPage = new HeroDetailsPage();
