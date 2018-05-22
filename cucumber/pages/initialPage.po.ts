import { browser, by, element, until } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { BasePage } from './basePage.po';

export class InitialPage implements BasePage {
  url: string = 'http://localhost:4200/';

  public getUrl() {
    return this.url;
  }

  public getRootElement() {
    return element(by.id('initialPage'));
  }

  public getApplicationName() {
    return element(by.id('initialTitle')).getText();
  }

  public getDashboardButton() {
    return element(by.id('linkDashBoard'));
  }

  public getHeroesButton() {
    return element(by.id('linkHeroes'));
  }
}
export const initialPage = new InitialPage();
