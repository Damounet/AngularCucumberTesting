[How to write features files](../features) | [How to write pages files](../pages)

# How to write a steps file

> //Intro à rédiger

## Steps files

A Steps file contains the implementation of the steps. Steps files are written with Typescript.

## Steps

> //N'y mettre qu'un squelette et expliquer le rapport entre les features et les steps files

A Step is a Gherkin's phrase which starts with the keywords Given, When or Then.

* The keyword **Given** describes a scenario context.
* The keyword **When** describes an user action.
* The keyword **Then** checks a result from an user action.

The steps have to be simple and reusable.

```Typescript
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
```

## How to validate a step implementation

A valid step respects the Given, When and Then rules. It also answers to its creation's purpose.
Moreover, each step has to checks its own behavior.

Example :

```Gherkin
Given the user is on Tour of Heroes
```

This step has been created to give a context to the scenario.
This context is the user location on the internet.
So, the scenario needs that the user is on Tour of Heroes to be relevant.

Let's write the implementation with these informations.

```Typescript
    Given('the user is on Tour of Heroes', function() {
        browser.get(initialPage.getUrl());
        return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
    });
```

browser.get() sends the browser on the url given between the ().
expect(element.isDisplayed()).thing.true checks that the browser is well displaying a specific element of the
page to check if the good page is displayed.

So, this step implementation respects the steps rules because, as a given step it only describes a context, it also answers to the purpose of its creation because it brings the browser on the good page and check itself if the page is displayed, so it checks its own behavior.

IMPORTANT : A STEP HAS TO CHECK ITSELF

## Import/Require

An import or a require signals to the compiler that the file needs some more things to works. To write a steps file at least these four things are needed :

* The pages which are used in the steps file
* Some libraries

Just copy/paste these import/require above all of your step files, modify and add the pages imports.

```Typescript
import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';
import { InitialPage } from '../pages/initialPage.po';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
```

## Templates from cucumber

When the feature file is ready, without the step file, try to lauch the functionnal test with :

> `protractor protractor-cucumber.conf.js`

The console gives all the steps template because the steps aren't implemented yet.

```Typescript
Then('the user is on the {string} hero details page', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
```

The template returns the keyword `pending` which stops the scenario execution but it doesn't send an error.

## Templates

### Browser things :

#### get()

```Typescript
browser.get(url) //Used to redirect the browser to the url given as a parameter
```

Usage : Used to go on the Tour of Heroes Initial page.

```Typescript
Given('the user is on Tour of Heroes', function() {
    browser.get(initialPage.getUrl());
    return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
});
```

#### getCurrentUrl()

```Typescript
browser.getCurrentUrl() //Returning the browser current url, useful to compare with another url
```

Usage : Used to compare the current url to heroes page url to know if the user is on the heroes page

```Typescript
Then('the user is on the heroes page', function() {
    return expect(browser.getCurrentUrl()).is.eventually.equal(
        heroesPage.getUrl()
    );
});
```

#### getTitle()

```Typescript
browser.getTitle() //Returning the current page's browser title
```

Usage : Used to compare the actual title of the browser with the expected title to see if the user is on the good website.

```Typescript
Given('the browser page title is {string}', function(pageTitle) {
    return expect(browser.getTitle()).is.eventually.equal(pageTitle);
});
```

### User action things :

#### click()

```Typescript
page.button.click() //Used to click on button which is on page
```

Usage : Used to click on the Heroes button to test it. If it works, then the user won't be on the same page after its click.

```Typescript
When('the user click on heroes button', function() {
    initialPage.getHeroesButton().click();
    return expect(browser.getCurrentUrl()).is.eventually.not.equal(
        dashboardPage.getUrl()
    );
});
```

#### sendKeys('')

```Typescript
page.input.sendKeys('une chaîne de caractères') //Used to write something in an input
```

Usage : Used to write something in a search bar and check if the search's results are displayed.

```Typescript
When('the user writes {string} in the search bar', function(searchHeroString) {
    dashboardPage.getSearchInput().sendKeys(searchHeroString);
    return expect(
        dashboardPage.getSearchHeroResult().isDisplayed()
    ).is.eventually.true;
});
```

### Expect chai things :

* expect()
  * This build a promise. This is your first comparison element.

```Typescript
return expect(
    dashboardPage.getSearchHeroResult().isDisplayed()
)
```

* is
  * This is a linker. It is not mandatory, the purpose is about coding as you logically think.
* eventually
  * This is mandatory. It transform a promise into a promise result asynchronously.
* not
  * This is an inverser. For example, it transform 'equal()' to 'unequal()'(unequal()function doesn't exist)

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.not.equal(dashboardPage.getUrl());
```

* equal(parameter)
  * It tests the equality between the expect() promise result and the equal() parameter.

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.equal(dashboardPage.getUrl());
```

* include()
  * It tests the inclusion between the expect() promise result and the include() parameter.

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.include(initialPage.getUrl());
```

* true
  * It tests if the expect() promise result is true.

```Typescript
return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
```

## Our best practices

> //A faire
