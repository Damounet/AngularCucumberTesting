[How to write features files](../features) | [How to write pages files](../pages)

# How to write a steps file

<!-- TODO -->

The steps files are feature files implementation. They are written by the QA.

This README describes how to write a steps file with our best practices.

## Steps files

<!-- TODO -->

A Steps file contains the implementation of the steps.

A Steps file is name 'featureFileName.step.ts'. Its place is in /cucumber/step_definitions.

Steps files are written with Typescript.

[To learn about Typescript.](https://www.typescriptlang.org/)

## Steps

A Step in a steps file is an implementation of the same step in the feature file.

In the feature file :

```Gherkin
Given I am on Tour of Heroes
```

In the steps file :

```Typescript
Given('I am on Tour of Heroes', function() {
    //Do code
});
```

## Import/Require

An import or a require signals to the compiler that the file needs some more things to work. To write a steps file at least these two things are needed :

- The pages used in the steps file, add the one needed specifically for the concerned steps file.

```Typescript
import { InitialPage } from '../pages/initialPage.po';
```

- Some libraries

Just copy/paste these import/require above all of your step files.

```Typescript
import { browser, Button, element, by } from 'protractor';
import { protractor } from 'protractor/built/ptor';

var { Given, When, Then, After } = require('cucumber');
const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
```

## Templates from cucumber

Cucumber can automatically generate some templates for the not implemented steps.

When the feature file is ready try to launch the functionnal test with :

> `protractor protractor-cucumber.conf.js`

Here is the result :

<img src="../../res/consoleScreen.png" height="400">

It gives all the steps template, in yellow on the image above, because the steps aren't implemented yet.

The template returns the keyword `pending` which stops the scenario execution but it doesn't send an error.

## Testing tools

In the following parts, pages will be used. They are a sum of helpers to get some element from a specific page. [For more informations about pages.](../pages/README.md)

### Browser main methods

#### Browser definition

browser is the protractor webdriver implementation : [Protractor browser documentation](https://www.protractortest.org/#/api?view=ProtractorBrowser)

#### get()

Navigate to the given destination and loads mock modules before Angular.

```Typescript
browser.get('google.com');
```

#### getCurrentUrl()

Schedules a command to retrieve the URL of the current page.

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.equal('google.com');
```

#### getTitle()

Schedules a command to retrieve the current page's title.

```Typescript
return expect(browser.getTitle()).is.eventually.equal('Google');
```

### User action methods

#### Definition

Methods to simulate user action during the tests.

#### click()

Used to click on button on the page.

```Typescript
googlePage.getSearchButton().click();
```

#### sendKeys('')

Used to write something in an input.

```Typescript
googlePage.getSearchInput().sendKeys('How to write a steps file');
```

### Assertion

- In computer software testing, a test assertion is an expression which encapsulates some testable logic specified about a target under test.

- expect()
  - This is the main element to the [BDD style assertion from chai](http://www.chaijs.com/api/bdd/). It uses a chainable language to construct assertions.

```Typescript
return expect(
    dashboardPage.getSearchHeroResult().isDisplayed()).chainableLanguage
```

- Chainable language
  - is
    - This is a linker. It is not mandatory. The code is prettier with it.
  - eventually
    - This is mandatory. It transform a promise into a promise result. [Read more about Chai as promised and Eventually](https://www.npmjs.com/package/chai-as-promised)
  - not
    - Negates all assertions that follow in the chain.

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.not.equal(dashboardPage.getUrl());
```

- equal(parameter)
  - Asserts that the target is strictly (===) equal to the given val.

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.equal(dashboardPage.getUrl());
```

- include()
  - When the target is a string, include() asserts that the given string val is a substring of the target. [Read more about it to learn about the different types.](http://www.chaijs.com/api/bdd/#method_include)

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.include(initialPage.getUrl());
```

- true
  - Asserts that the target is strictly (===) equal to true.

```Typescript
return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
```

- Multiple promise assertions
  - To perform assertions on multiple promises, use Promise.all to combine multiple Chai as Promised assertions. [Read more about it.](https://github.com/domenic/chai-as-promised#multiple-promise-assertions)

### Examples

In the feature file :

```Gherkin
Given I am on a specific website
```

In the steps file :

```Typescript
Given('I am on a specific website',function(){
    browser.get(websiteUrl);
    return expect(browser.getCurrentUrl()).is.eventually.equal(websiteUrl);
});
```

In the feature file :

```Gherkin
When I want to click on this button
```

In the steps file :

```Typescript
When('I want to click on this button',function(){
    page.getThisButton.click();
    return expect(browser.getCurrentUrl()).is.eventually.equal(expectedPage.getUrl());
})
```

In the feature file :

```Gherkin
Then I am on another page
```

In the steps file :

```Typescript
Then('I am on another page',function(){
    return expect(expectedPage.getTitle()).is.eventually.equal('Cucumber is awesome');
})
```

## Our best practices

A Given and a When step have to check their own behavior.

A Then step has to check the functionnal result from the previous step.

### Example

#### Given

In the feature file :

```Gherkin
Given I am on a specific website
```

In the steps file :

```Typescript
Given('I am on a specific website',function(){
    browser.get(websiteUrl);
    return expect(browser.getCurrentUrl()).is.eventually.equal(websiteUrl);
});
```

This Given implementation goes on the specific website and it check if it is on this specific website.

#### When

In the feature file :

```Gherkin
When I want to click on this button
```

In the steps file :

```Typescript
When('I want to click on this button',function(){
    page.getThisButton.click();
    return expect(browser.getCurrentUrl()).is.eventually.equal(expectedPage.getUrl());
})
```

This When implementation clicks on the button and check if the current url is the same as the url of the expected page.

#### Then

In the feature file :

```Gherkin
Then I am on another page
```

In the steps file :

```Typescript
Then('I am on another page',function(){
    return expect(expectedPage.getTitle()).is.eventually.equal('Cucumber is awesome');
})
```

This Then implementation checks if the title of the expectedPage is the expected title.
