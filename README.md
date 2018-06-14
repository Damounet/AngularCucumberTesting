# Angular functionnal testing with CucumberJS <img src="https://avatars0.githubusercontent.com/u/320565?s=200&v=4" height="40"/>

This project aims to give an implementation of Cucumber tests in an Angular application and propose a solution to let everyone be involved in your project testing.

This project is a fork of the Angular [Tour of Heroes tutorial](https://angular.io/tutorial) application, which already have functional tests. Tests have been duplicated and re-implemented in the Cucumber way.


## Objectives

* Involve the Product Owner (PO) / the business in the writing of the test documentation and having specifications while working in Agile method.
* Compartmentalize the implementation of the tests so that:
  - The PO / business analysts are in charge of writing the scenarios (that can be used as acceptance criteria in a User Story). [How to write features files](./cucumber/features)
  - The Quality Assurance (QA) is in charge of implementing each step of the scenarios given by the PO. [How to write steps files](./cucumber/step_definitions)
  - The development team creates helpers called *pages* that will help the QA writing their tests. [How to write pages files](./cucumber/pages)


# Dependencies


[Protractor Cucumber Framework](https://github.com/protractor-cucumber-framework/protractor-cucumber-framework) to launch the test suite.

[Cucumber JS](https://github.com/cucumber/cucumber-js) is the javascript implementation of Cucumber.

[Chai](http://www.chaijs.com/) brings better assertion in our tests.

# Installation

Install all the dependencies using :

```bash
yarn install
```

In order to run the protractors tests you need to get the selenium drivers with :

```bash
yarn webdriver-manager update
```

# Running the tests

First you need to run the Tour of Heroes application :

```bash
yarn run start
```

To run tour of heroes functional tests:

```bash
protractor protractor-toh.conf.js
```

To run tour of heroes cucumber functional tests:

```bash
protractor protractor-cucumber.conf.js
```

For more information about running cucumber tests : https://github.com/cucumber/cucumber-js/blob/master/docs/cli.md
## Generating the html report

After running the cucumber tests :

```bash
node index.js
```

## Extract of all the known steps 

Run :

```bash
./cucumber/extract_sentences.sh
```

It outputs :
  - a csv file listing all the known steps and how many times each is used.
  - a markdown file listing all the known steps sorted out by keyword.
  
