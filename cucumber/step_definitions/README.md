[How to write features files](../features) | [How to write pages files](../pages)

# How to write a steps file

The steps files are feature files implementation. They are written by the QA.

This README is written to learn to the QA how to write a step files with our best practices.

## Steps files

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

An import or a require signals to the compiler that the file needs some more things to works. To write a steps file at least these four things are needed :

* The pages used in the steps file

```Typescript
import { InitialPage } from '../pages/initialPage.po';
```

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

Cucumber can automatically generate some templates for the not implemented steps.

When the feature file is ready try to launch the functionnal test with :

> `protractor protractor-cucumber.conf.js`

The console gives all the steps template because the steps aren't implemented yet.

```Typescript
Then('I am on the {string} hero details page', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});
```

The template returns the keyword `pending` which stops the scenario execution but it doesn't send an error.

## Templates

### Browser things :

#### get()

Used to redirect the browser on another webpage.

```Typescript
browser.get('google.com');
```

#### getCurrentUrl()

Returning the browser current url, useful to compare with another url.

```Typescript
return expect(browser.getCurrentUrl()).is.eventually.equal('google.com');
```

#### getTitle()

Returning the current page's browser title.

```Typescript
return expect(browser.getTitle()).is.eventually.equal('Google');
```

### User action things :

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

### Expect chai things :

* expect()
  * This build a promise. This is your first comparison element.

```Typescript
return expect(
    dashboardPage.getSearchHeroResult().isDisplayed()
)
```

* is
  * This is a linker. It is not mandatory. The code is prettier with it than without it.
* eventually
  * This is mandatory. It transform a promise into a promise result.
* not
  * This is an inverser. For example, not.equal() tests the unequality instead of equality.

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

### Templates

```Gherkin
Given I am on a specific website
```

```Typescript
Given('I am on a specific website',function(){
    browser.get(websiteUrl);
    return expect(browser.getCurrentUrl()).is.eventually.equal(websiteUrl);
});
```

```Gherkin
When I want to click on this button
```

```Typescript
When('I want to click on this button',function(){
    page.getThisButton.click();
    return expect(browser.getCurrentUrl()).is.eventually.not.equal(previousPageUrl);
})
```

```Gherkin
Then I am on another page
```

```Typescript
Then('I am on another page',function(){
    return expect(browser.getCurrentUrl()).is.eventually.equal(anotherPageUrl);
})
```

## Our best practices

A step has to check itself.
