import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { InitialPage } from '../pages/initialPage.po';
import { DashboardPage } from '../pages/dashboardPage.po';
import { HeroDetailsPage } from '../pages/heroDetailsPage.po';
import { HeroesPage } from '../pages/heroesPage.po';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

When('the user writes {string} in the add bar', function(newHeroName) {
  HeroesPage.getAddHeroInput().sendKeys(newHeroName);
  return expect(
    HeroesPage.getAddHeroInput().getAttribute('value')
  ).is.eventually.equal(newHeroName);
});

When('the user click on the add button', function() {
  HeroesPage.getAddButton().click();
  return expect(
    HeroesPage.getAddHeroInput().getAttribute('value')
  ).is.eventually.equal('');
});

Then('{string} is displayed in the heroes list', function(heroName) {
  return expect(
    HeroesPage.getHeroButtonByName(heroName).isDisplayed()
  ).is.eventually.true;
});

When('the user click on the {string} delete button', function(heroName) {
  HeroesPage.getDeleteButtonByName(heroName).click();
  return expect(
    HeroesPage.getHeroButtonByName(heroName).isPresent()
  ).is.eventually.not.true;
});

Then('{string} is not present anymore in the heroes list', function(heroName) {
  return expect(
    HeroesPage.getHeroButtonByName(heroName).isPresent()
  ).is.eventually.not.true;
});

When('the user click on the {string} button', function(heroName) {
  HeroesPage.getHeroButtonByName(heroName).click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    HeroesPage.getUrl()
  );
});
