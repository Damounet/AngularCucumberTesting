import { DashboardPage } from '../pages/dashboardPage.po';
import { HeroDetailsPage } from '../pages/heroDetailsPage.po';
import { InitialPage } from '../pages/initialPage.po';
import { HeroesPage } from '../pages/heroesPage.po';
import { MessagesPage } from '../pages/messagesPage.po';
import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';

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

Then('has page title {string}', function(pageTitle) {
  return expect(browser.getTitle()).is.eventually.equal(pageTitle);
});

Then('on the initial page has h1 {string}', function(title) {
  return expect(InitialPage.getApplicationName()).is.eventually.equal(title);
});

Then('has view Dashboard', function() {
  return expect(
    InitialPage.getDashboardButton().isDisplayed()
  ).is.eventually.true;
});

Then('has view Heroes', function() {
  return expect(InitialPage.getHeroesButton().isDisplayed()).is.eventually.true;
});

Then('has dashboard as the active view', function() {
  return expect(
    DashboardPage.getRootElement().isDisplayed()
  ).is.eventually.true;
});

After(function() {
  return browser.restart();
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
});

Then('search input is visible', function() {
  return expect(
    DashboardPage.getSearchRootElement().isDisplayed()
  ).is.eventually.true;
});

When('I write {string} in the search input', function(searchString) {
  DashboardPage.getSearchInput().sendKeys(searchString);
  return expect(
    DashboardPage.getSearchInput().getAttribute('value')
  ).is.eventually.equal(searchString);
});

Then('{string} link button to his details page is visible', function(heroName) {
  return expect(
    DashboardPage.getHeroButtonByName(heroName).isDisplayed()
  ).is.eventually.true;
});

When('I click on {string} link button from dashboard search page', function(
  heroName
) {
  DashboardPage.getHeroButtonByName(heroName).click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    DashboardPage.getUrl()
  );
});

Then('I am on {string} hero page details', function(heroName) {
  return expect(
    HeroDetailsPage.getHeroNameInput().getAttribute('value')
  ).is.eventually.equal(heroName);
});

When('I click on the heroes button', function() {
  InitialPage.getHeroesButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    DashboardPage.getUrl()
  );
});

Then('I am on the heroes page', function() {
  return expect(HeroesPage.getRootElement().isDisplayed()).is.eventually.true;
});

When('I click on {string} link button from heroes page', function(heroName) {
  HeroesPage.getHeroButtonByName(heroName).click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    HeroesPage.getUrl()
  );
});

Given('I am on hero details page which its name is {string}', function(
  heroName
) {
  browser.get(InitialPage.getUrl());
  DashboardPage.getHeroButtonByName(heroName).click();
  return expect(
    HeroDetailsPage.getHeroNameInput().getAttribute('value')
  ).is.eventually.equal(heroName);
});

When('I am modifying the name by {string}', function(newHeroName) {
  HeroDetailsPage.getHeroNameInput().clear();
  browser.wait(HeroDetailsPage.getHeroNameInput().sendKeys(newHeroName), 5000);
  return expect(
    HeroDetailsPage.getHeroNameInput().getAttribute('value')
  ).is.eventually.equal(newHeroName);
});

When('I click on the save button', function() {
  HeroDetailsPage.getSaveButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.include(
    HeroDetailsPage.getUrl()
  );
});

Then('I am on the Dashboard page', function() {
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    DashboardPage.getUrl()
  );
});

Then('the hero which name is {string} is visble in top heroes grid', function(
  heroName
) {
  return expect(
    DashboardPage.getHeroButtonByName(heroName).getText()
  ).is.eventually.equal(heroName);
});

Given('I am on heroes page', function() {
  browser.get(InitialPage.getUrl());
  InitialPage.getHeroesButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    HeroesPage.getUrl()
  );
});

When('I write {string} in the add input', function(newHeroName) {
  HeroesPage.getAddHeroInput().sendKeys(newHeroName);
  return expect(
    HeroesPage.getAddHeroInput().getAttribute('value')
  ).is.eventually.equal(newHeroName);
});

When(
  'I click on the add button and {string} is visible on the heroes page',
  function(newHeroName) {
    HeroesPage.getAddButton().click();
    return expect(HeroesPage.getHeroButtonByName(newHeroName).isDisplayed()).is
      .eventually.true;
  }
);

When(
  'I click on the {string} delete button and the hero is not visible anymore on the heroes page',
  function(heroName) {
    HeroesPage.getDeleteButtonByName(heroName).click();
    return expect(HeroesPage.getHeroButtonByName(heroName).isPresent()).is
      .eventually.not.true;
  }
);

Then('messages page is visible', function() {
  return expect(MessagesPage.getRootElement().isDisplayed()).is.eventually.true;
});

When(
  'I click on clear button, mesages page is not visible anymore',
  function() {
    MessagesPage.getClearButton().click();
    return expect(MessagesPage.getRootElement().isPresent()).is.eventually.not
      .true;
  }
);
