/* import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { InitialPage } from '../pages/initialPage.po';
import { DashboardPage } from '../pages/dashboardPage.po';
import { HeroDetailsPage } from '../pages/heroDetailsPage.po';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given('I am on toh', function() {
  browser.get(InitialPage.getUrl());
  return expect(InitialPage.getRootElement().isDisplayed()).is.eventually.true;
});

Then('top heroes grid is visible', function() {
  return expect(DashboardPage.getTopHeroes().isDisplayed()).is.eventually.true;
});

When('I click on {string} link button from top heroes grid', function(
  heroName
) {
  DashboardPage.getHeroButtonByName(heroName).click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    DashboardPage.getUrl()
  );
});

Then('I am on the hero page details', function() {
  return expect(browser.getCurrentUrl()).is.eventually.include(
    HeroDetailsPage.getUrl()
  );
});

When('I click on the back button from the hero details page', function() {
  HeroDetailsPage.getBackButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.include(
    HeroDetailsPage.getUrl()
  );
});

Then('I am on the previous page', function() {
  return expect(browser.getCurrentUrl()).is.eventually.include(
    InitialPage.getUrl()
  );
}); */
