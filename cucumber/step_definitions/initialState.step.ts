import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { InitialPage } from '../pages/initialPage.po';
import { DashboardPage } from '../pages/dashboardPage.po';
import { HeroesPage } from '../pages/heroesPage.po';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given('the user is on Tour of Heroes', function() {
  browser.get(InitialPage.getUrl());
  return expect(InitialPage.getRootElement().isDisplayed()).is.eventually.true;
});

Given('the browser page title is {string}', function(pageTitle) {
  return expect(browser.getTitle()).is.eventually.equal(pageTitle);
});

Given('the page has the title {string}', function(title) {
  return expect(InitialPage.getApplicationName()).is.eventually.equal(title);
});

Given('the page has the Dashboard button', function() {
  return expect(
    InitialPage.getDashboardButton().isDisplayed()
  ).is.eventually.true;
});

Given('the page has the Heroes button', function() {
  return expect(InitialPage.getHeroesButton().isDisplayed()).is.eventually.true;
});

Given('the page displays the dashboard', function() {
  return expect(InitialPage.getHeroesButton().isDisplayed()).is.eventually.true;
});

When('the user click on heroes button', function() {
  InitialPage.getHeroesButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    DashboardPage.getUrl()
  );
});

Then('the user is on the heroes page', function() {
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    HeroesPage.getUrl()
  );
});

Given('the user is on the toh heroes page', function() {
  browser.get(InitialPage.getUrl());
  InitialPage.getHeroesButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    HeroesPage.getUrl()
  );
});

When('the user click on dashboard button', function() {
  InitialPage.getDashboardButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    HeroesPage.getUrl()
  );
});

Then('the user is on the dashboard page', function() {
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    DashboardPage.getUrl()
  );
});
