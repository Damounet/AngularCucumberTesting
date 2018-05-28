* [How to install and run the functionnal tests](../)
* [How to write features files](../features)
* [How to write pages files](../pages)

# How to write a steps file

## Steps files

A Steps file is containing the implementation of the steps which are write in Gherkin in the corresponding feature file.

## Steps

    Given('the user is on Tour of Heroes', function() {
        browser.get(initialPage.getUrl());
        return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
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

All the phrases which are in a scenario and starts with the keywords Given, When or Then are called Steps.

### Given

    Given('the user is on Tour of Heroes', function() {
        browser.get(initialPage.getUrl());
        return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
    });

The Given steps describe a context.

### When

    When('the user click on heroes button', function() {
        initialPage.getHeroesButton().click();
        return expect(browser.getCurrentUrl()).is.eventually.not.equal(
            dashboardPage.getUrl()
        );
    });

The When steps describe an user action.

### Then

    Then('the user is on the heroes page', function() {
        return expect(browser.getCurrentUrl()).is.eventually.equal(
            heroesPage.getUrl()
        );
    });

The Then steps are describing a result of an user action.

## How to validate a step implementation

A good step, and so a validate step, is a step which respects the Given, When and Then rules. It also answer to the purpose of its creation.
Moreover, each steps has to check its own behavior.

Example :

> Given the user is on Tour of Heroes

This step has been created to give a context to the scenario.
This context is the user location on the internet.
So, the scenario needs that the user is on Tour of Heroes to be relevant.

Let's write the implementation with these informations.

    Given('the user is on Tour of Heroes', function() {
        browser.get(initialPage.getUrl());
        return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
    });

browser.get() is used to send the browser on the url given between the ()
return expect() is checking that the browser is well displaying the most relevant element of the
page to check if the good page is displayed.

So, this step implementation is respecting the steps rules because, as a given step it only create a context, it also answer to the purpose of its creation because it bring the browser on the good page and check itself if the page is displayed, so it check its own behavior.

IMPORTANT : A STEP HAS TO CHECK ITSELF

## Import/Require

    import { browser, Button, element, by } from 'protractor';
    import { protractor } from 'protractor/built/ptor';
    import { InitialPage } from '../pages/initialPage.po';

    var { Given, When, Then, After } = require('cucumber');
    const path = require('path');
    const chai = require('chai');
    const chaiAsPromised = require('chai-as-promised');
    chai.use(chaiAsPromised);
    const expect = chai.expect;

Basically, an import or a require signaling to the compiler that the file is needind some more things to works. To write a steps file, you need, at least, four things :

* Some tools from protractor
* The pages objects which are used in the steps file
* Some tools from cucumber
* And chai/chaiAsPromised to use the expect() things

Just copy/paste these import/require above all of your step files, modify and add the pages imports.

## Templates from cucumber

When your feature file is ready, without your step file, try to lauch your functionnal test with :

> `protractor protractor-cucumber.conf.js`

If your feature file is good, then the command console will give you all your steps template because the steps aren't implement yet.

    Then('the user is on the {string} hero details page', function (string) {
       // Write code here that turns the phrase above into concrete actions
       return 'pending';
    });

The template is returning the keyword `pending` which is stopping the scenario execution but it doesn't send an error.

## Templates

Browser things :

> browser.get(url) //Used to redirect the browser to the url given as a parameter

Usage : Used to go on the Tour of Heroes Initial page.

    Given('the user is on Tour of Heroes', function() {
        browser.get(initialPage.getUrl());
        return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
    });

> browser.getCurrentUrl() //Returning the browser current url, useful to compare with a url

Usage : Used to compare the current url to heroes page url to know if the user is on the heroes page, as expected

    Then('the user is on the heroes page', function() {
        return expect(browser.getCurrentUrl()).is.eventually.equal(
            heroesPage.getUrl()
        );
    });

> browser.getTitle() //Returning the current page's browser title

Usage : Used to compare the actual title of the browser with the expected title to see if the user is on the good website.

    Given('the browser page title is {string}', function(pageTitle) {
        return expect(browser.getTitle()).is.eventually.equal(pageTitle);
    });

User action things :

> page.button.click() //Used to click on button which is on page

Usage : Used to click on the Heroes button to test it. If it works, then the user won't be on the same page after its click.

    When('the user click on heroes button', function() {
        initialPage.getHeroesButton().click();
        return expect(browser.getCurrentUrl()).is.eventually.not.equal(
            dashboardPage.getUrl()
        );
    });

> page.input.sendKeys('une chaîne de caractères') //Used to write something in an input

Usage : Used to write something in a search bar and check if the search's results are displayed.

    When('the user writes {string} in the search bar', function(searchHeroString) {
        dashboardPage.getSearchInput().sendKeys(searchHeroString);
        return expect(
            dashboardPage.getSearchHeroResult().isDisplayed()
        ).is.eventually.true;
    });

Expect chai things :

* expect()
* is
* eventually
* not
* equal()
* include()

Elements comparison tools :

## Our best practices
