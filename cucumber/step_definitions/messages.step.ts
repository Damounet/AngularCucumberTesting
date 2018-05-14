import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { InitialPage } from '../pages/initialPage.po';
import { DashboardPage } from '../pages/dashboardPage.po';
import { HeroDetailsPage } from '../pages/heroDetailsPage.po';
import { HeroesPage } from '../pages/heroesPage.po';
import { MessagesPage } from '../pages/messagesPage.po';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given('the message page is visible', function() {
  return expect(MessagesPage.getRootElement().isDisplayed()).is.eventually.true;
});

When('the user click on the clear button', function() {
  MessagesPage.getClearButton().click();
  return expect(
    MessagesPage.getRootElement().isPresent()
  ).is.eventually.not.true;
});

Then('the messages page is not visible anymore', function() {
  return expect(
    MessagesPage.getRootElement().isPresent()
  ).is.eventually.not.true;
});
