import { ElementFinder } from 'protractor';

export interface BasePage {
  url: string;
  getUrl(): string;
  getRootElement(): ElementFinder;
}
