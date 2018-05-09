import { defineSupportCode } from 'cucumber';
import { DashboardPage } from '../pages/dashboardPage.po';
import { HeroDetailsPage } from '../pages/heroDetailsPage.po';
import { InitialPage } from '../pages/initialPage.po';
import { browser, Button, element, by, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

defineSupportCode(({ Given, When, Then, After }) => {
  Given('I am on toh', function() {
    browser.get(InitialPage.getUrl());
    return expect(
      InitialPage.getRootElement().isDisplayed()
    ).is.eventually.true;
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
    return expect(
      InitialPage.getHeroesButton().isDisplayed()
    ).is.eventually.true;
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
    return expect(
      DashboardPage.getTopHeroes().isDisplayed()
    ).is.eventually.true;
  });

  When('I click on the first hero in the heroes grid', function() {
    DashboardPage.getHeroButtons().click();
    return expect(browser.getCurrentUrl()).is.eventually.not.equal(
      DashboardPage.getUrl()
    );
  });

  Then('I am on the hero page details', function() {
    return expect(browser.getCurrentUrl()).to.eventually.include(
      HeroDetailsPage.getUrl()
    );
  });
});
