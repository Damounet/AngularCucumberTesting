import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { InitialPage } from '../pages/initialPage.po';
import { dashboardPage } from '../pages/dashboardPage.po';
import { heroDetailsPage } from '../pages/heroDetailsPage.po';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

/* When('the user clicks on {string} button from top heroes grid', function(
  heroName
) {
  dashboardPage.getHeroButtonByName(heroName).click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    dashboardPage.getUrl()
  );
}); */

Then('the user is on the {string} hero details page', function(heroName) {
  return expect(
    heroDetailsPage.getHeroNameInput().getAttribute('value')
  ).is.eventually.equal(heroName);
});

Given('the search bar is visible', function() {
  return expect(
    dashboardPage.getSearchInput().isDisplayed()
  ).is.eventually.true;
});

When('the user writes {string} in the search bar', function(searchHeroString) {
  dashboardPage.getSearchInput().sendKeys(searchHeroString);
  return expect(
    dashboardPage.getSearchHeroResult().isDisplayed()
  ).is.eventually.true;
});

Then('{string} button is visible in the search result', function(heroName) {
  return expect(
    dashboardPage.getSearchHeroButtonByName(heroName).isDisplayed()
  ).is.eventually.true;
});

Given('{string} button is displayed in the search result', function(heroName) {
  dashboardPage.getSearchInput().sendKeys(heroName);
  return expect(
    dashboardPage.getSearchHeroButtonByName(heroName).isDisplayed()
  ).is.eventually.true;
});

When('the user click on the {string} button from the search result', function(
  heroName
) {
  dashboardPage.getSearchHeroButtonByName(heroName).click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    dashboardPage.getUrl()
  );
});
