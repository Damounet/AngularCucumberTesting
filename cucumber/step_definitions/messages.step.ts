import { browser, Button, element, by } from "protractor";
import { protractor } from "protractor/built/ptor";
import { messagesPage } from "../pages/messagesPage.po";

var { Given, When, Then, After } = require("cucumber");
const path = require("path");
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;

Given("I see the message page", function() {
  return expect(messagesPage.getRootElement().isDisplayed()).is.eventually.true;
});

When("I click on the clear button", function() {
  messagesPage.getClearButton().click();
  return expect(
    messagesPage.getRootElement().isPresent()
  ).is.eventually.not.true;
});

Then("I can't see the messages page anymore", function() {
  return expect(
    messagesPage.getRootElement().isPresent()
  ).is.eventually.not.true;
});
