import { browser, Button, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { heroesPage } from "../pages/heroesPage.po";

var { Given, When, Then, After } = require("cucumber");
const path = require("path");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

When("I write {string} in the add bar", function(newHeroName) {
  heroesPage.getAddHeroInput().sendKeys(newHeroName);
  return expect(
    heroesPage.getAddHeroInput().getAttribute("value")
  ).is.eventually.equal(newHeroName);
});

When("I click on the add button", function() {
  heroesPage.getAddButton().click();
  return expect(
    heroesPage.getAddHeroInput().getAttribute("value")
  ).is.eventually.equal("");
});

Then("I can see {string} in the heroes list", function(heroName) {
  return expect(
    heroesPage.getHeroButtonByName(heroName).isDisplayed()
  ).is.eventually.true;
});

When("I click on the {string} delete button", function(heroName) {
  heroesPage.getDeleteButtonByName(heroName).click();
  return expect(
    heroesPage.getHeroButtonByName(heroName).isPresent()
  ).is.eventually.not.true;
});

Then("I can't see {string} in the heroes list anymore", function(heroName) {
  return expect(
    heroesPage.getHeroButtonByName(heroName).isPresent()
  ).is.eventually.not.true;
});

When("I click on the {string} button", function(heroName) {
  heroesPage.getHeroButtonByName(heroName).click();
  return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    heroesPage.getUrl()
  );
});
