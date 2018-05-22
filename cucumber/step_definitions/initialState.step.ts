import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { initialPage } from '../pages/initialPage.po';
import { dashboardPage } from '../pages/dashboardPage.po';
import { heroesPage } from '../pages/heroesPage.po';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

Given('the user is on Tour of Heroes', function() {
  browser.get(initialPage.getUrl());
  return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
});

Given('the browser page title is {string}', function(pageTitle) {
  return expect(browser.getTitle()).is.eventually.equal(pageTitle);
});

Given('the page has the title {string}', function(title) {
  return expect(initialPage.getApplicationName()).is.eventually.equal(title);
});

Given('the page has the Dashboard button', function() {
  return expect(
    initialPage.getDashboardButton().isDisplayed()
  ).is.eventually.true;
});

Given('the page has the Heroes button', function() {
  return expect(initialPage.getHeroesButton().isDisplayed()).is.eventually.true;
});

Given('the page displays the dashboard', function() {
  return expect(initialPage.getHeroesButton().isDisplayed()).is.eventually.true;
});

When('the user click on heroes button', function() {
  initialPage.getHeroesButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    dashboardPage.getUrl()
  );
});

Then('the user is on the heroes page', function() {
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    heroesPage.getUrl()
  );
});

Given('the user is on the toh heroes page', function() {
  browser.get(initialPage.getUrl());
  initialPage.getHeroesButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    heroesPage.getUrl()
  );
});

When('the user click on dashboard button', function() {
  initialPage.getDashboardButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    heroesPage.getUrl()
  );
});

Then('the user is on the dashboard page', function() {
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    dashboardPage.getUrl()
  );
});
