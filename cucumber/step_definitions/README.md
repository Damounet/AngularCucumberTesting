# angularFunctionnalTesting

Testing the Tour of Heroes Tutorial app using protractor and cucumber.
[How to install and run the functionnal tests](../)|[How to write features files](../features)|[How to write pages files](../pages)

# Steps files

    A Steps file is containing the implementation of the steps which are write in Gherkin in
    the corresponding feature file.

## Steps

    > Given('the user is on Tour of Heroes', function() {
    >   browser.get(initialPage.getUrl());
    >   return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
    > });

    > When('the user click on heroes button', function() {
    >   initialPage.getHeroesButton().click();
    >   return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    >       dashboardPage.getUrl()
    >   );
    > });

    > Then('the user is on the heroes page', function() {
    >   return expect(browser.getCurrentUrl()).is.eventually.equal(
    >       heroesPage.getUrl()
    >   );
    > });

    All the phrases which are in a scenario and starting with the keywords Given, When or Then are
    called Steps.

### Given

    > Given('the user is on Tour of Heroes', function() {
    >   browser.get(initialPage.getUrl());
    >   return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
    > });

    The Given steps are describing a context.
    Most of the time, the Given steps implementation has to go on a specific page and check
    that the browser is on the page.
    However, a Given step can be a visibility element check.
    IMPORTANT : NO USER ACTION IN A GIVEN STEP

### When

    > When('the user click on heroes button', function() {
    >   initialPage.getHeroesButton().click();
    >   return expect(browser.getCurrentUrl()).is.eventually.not.equal(
    >       dashboardPage.getUrl()
    >   );
    > });

    The When steps are describing an user action.
    During a When step implementation, an action is duing and the step has to check that something
    happened when the action has been performed.
    The When step hasn't to check that the action performed well, only if it happened something.
    For example, if the user click on the home button from the options page, the step has to check that
    the browser is not on the options page anymore, not that the browser is on the home page.
    IMPORTANT : ALWAYS ONE USER ACTION IN A WHEN STEP

### Then

    > Then('the user is on the heroes page', function() {
    >   return expect(browser.getCurrentUrl()).is.eventually.equal(
    >       heroesPage.getUrl()
    >   );
    > });

    The Then steps are describing a result of an user action.
    During a Then step implementation there is only one check to verify if the precedent user action
    (in the When step) is giving the good result.
    For example, if the user click on the home button from the options page during the When step,
    the Then step has to check if the browser has the home page url.
    IMPORTANT : NO USER ACTION IN A THEN STEP

## How to validate a step implementation

    A good step, and so a validate step, is a step which is respecting the Given, When and Then
    rules. It also answer to the purpose of its creation.
    Moreover, each steps has to check its own behavior.

    Example :

    > Given the user is on Tour of Heroes
    This step has been created to give a context to the scenario.
    This context is the user location on the internet.
    So, the scenario needs that the user is on Tour of Heroes to be relevant.

    Let's write the implementation with these informations.

    > Given('the user is on Tour of Heroes', function() {
    >   browser.get(initialPage.getUrl());
    >   return expect(initialPage.getRootElement().isDisplayed()).is.eventually.true;
    > });
    browser.get() is used to send the browser on the url given between the ()
    return expect() is checking that the browser is well displaying the most relevant element of the
    page to check if the good page is displayed.

    So, this step implementation is respecting the steps rules because, as a given step it only
    create a context, it also answer to the purpose of its creation because it bring the browser
    on the good page and check itself if the page is displayed, so it check its own behavior.

    IMPORTANT : A STEP HAS TO CHECK ITSELF

## Import/Require

## Templates from cucumber

## Templates

## Our best practices
