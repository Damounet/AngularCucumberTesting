import {browser} from "protractor/built/index";

var chai               = require('chai');
var chaiAsPromised     = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect             = chai.expect;
const {Given, Then, When} = require('cucumber');

var homePage = require('../pages/home.js')

var support = require('../pages/util.js');

Given('I am on toh', function() {
  return browser.get(browser.params.env.hostname);
});

Then('has title {string}', function(title) {
  return expect(browser.getTitle()).toEqual(title);
});

Then('has h1 {string}', function(hOne) {
  return support.expectHeading(1, hOne);
});

Then('has views Dashboard,Heroes', function() {

  return ;
});

Then('has dashboard as the active view', function() {

  return ;
});
