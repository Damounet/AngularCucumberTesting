import { browser, by, element, until } from 'protractor';
import { BasePage } from './basePage.po';
export class HeroesPage implements BasePage {
  url: string = 'http://localhost:4200/heroes';

  public getUrl() {
    return this.url;
  }

  public getRootElement() {
    return element(by.id('heroesPage'));
  }

  public getHeroButtonByName(heroName: string) {
    return element(by.id(heroName + 'Button'));
  }

  public getAddHeroInput() {
    return element(by.id('addHeroInput'));
  }

  public getAddButton() {
    return element(by.id('addButton'));
  }

  public getDeleteButtonByName(heroName: string) {
    return element(by.id(heroName + 'DeleteButton'));
  }
}
export const heroesPage = new HeroesPage();
