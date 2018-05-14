import { browser, Button, element, by } from 'protractor';
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

Given('the user is on the {string} details page', function(heroName) {
  browser.get(DashboardPage.getUrl());
  DashboardPage.getHeroButtonByName(heroName).click();
  return expect(
    HeroDetailsPage.getHeroNameInput().getAttribute('value')
  ).is.eventually.equal(heroName);
});

When('the user types {string} in the name bar', function(newHeroName) {
  HeroDetailsPage.getHeroNameInput().clear();
  HeroDetailsPage.getHeroNameInput().sendKeys(newHeroName);
  return expect(
    HeroDetailsPage.getHeroNameInput().getAttribute('value')
  ).is.eventually.equal(newHeroName);
});

When('the user click on the save button', function() {
  HeroDetailsPage.getSaveButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.include(
    HeroDetailsPage.getUrl()
  );
});

Then('the user come back to the dashboard page', function() {
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    DashboardPage.getUrl()
  );
});

Then('{string} is visible in the top heroes grid', function(newHeroName) {
  return expect(
    DashboardPage.getHeroButtonByName(newHeroName).isDisplayed()
  ).is.eventually.true;
});

When('the user click on the back button', function() {
  HeroDetailsPage.getBackButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.include(
    HeroDetailsPage.getUrl()
  );
});
