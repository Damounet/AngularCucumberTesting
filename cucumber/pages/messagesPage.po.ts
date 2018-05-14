import { browser, by, element, until } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { Page } from './Page.po';

export class MessagesPage implements Page {
  private static url: string = 'http://localhost:4200/';

  public static getUrl() {
    return this.url;
  }

  public static getRootElement() {
    return element(by.id('messagesPage'));
  }

  public static getClearButton() {
    return element(by.id('clearButton'));
  }
}
