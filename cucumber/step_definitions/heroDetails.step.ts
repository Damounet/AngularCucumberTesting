import { browser, Button, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { dashboardPage } from "../pages/dashboardPage.po";
import { heroDetailsPage } from "../pages/heroDetailsPage.po";

var { Given, When, Then, After } = require("cucumber");
const path = require("path");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

Given("I am on the {string} details page", function(heroName) {
  browser.get(dashboardPage.getUrl());
  dashboardPage.getHeroButtonByName(heroName).click();
  return expect(
    heroDetailsPage.getHeroNameInput().getAttribute("value")
  ).is.eventually.equal(heroName);
});

When("I type {string} in the name bar", function(newHeroName) {
  heroDetailsPage.getHeroNameInput().clear();
  heroDetailsPage.getHeroNameInput().sendKeys(newHeroName);
  return expect(
    heroDetailsPage.getHeroNameInput().getAttribute("value")
  ).is.eventually.equal(newHeroName);
});

When("I click on the save button", function() {
  heroDetailsPage.getSaveButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.include(
    heroDetailsPage.getUrl()
  );
});

Then("I come back to the dashboard page", function() {
  return expect(browser.getCurrentUrl()).is.eventually.equal(
    dashboardPage.getUrl()
  );
});

Then("I can see {string} in the top heroes grid", function(newHeroName) {
  return expect(
    dashboardPage.getHeroButtonByName(newHeroName).isDisplayed()
  ).is.eventually.true;
});

When("I click on the back button", function() {
  heroDetailsPage.getBackButton().click();
  return expect(browser.getCurrentUrl()).is.eventually.not.include(
    heroDetailsPage.getUrl()
  );
});
