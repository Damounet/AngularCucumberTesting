import { browser, by, element, until } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { BasePage } from './basePage.po';

export class MessagesPage implements BasePage {
  url: string = 'http://localhost:4200/';

  public getUrl() {
    return this.url;
  }

  public getRootElement() {
    return element(by.id('messagesPage'));
  }

  public getClearButton() {
    return element(by.id('clearButton'));
  }
}
export const messagesPage = new MessagesPage();
