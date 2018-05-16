# angularFunctionnalTesting

Testing the Tour of Heroes Tutorial app using protractor and cucumber.

# Installation

Install all the dependencies using :

`yarn install`

In order to run the protractors tests you need to get the selenium drivers with :

`yarn webdriver-manager update`

# Running the tests

First you need to run the Tour of Heroes application :

`yarn run start` (which simply does a `ng serve`)

## Running tour of heroes functionnal tests:

`protractor protractor-toh.conf.js`

### Running tour of heroes cucumber functionnal tests:

`protractor protractor-cucumber.conf.js` to run all tests with all features files
`protractor protractor-cucumber.conf.js --specs cucumber/features/heroes.feature` to run test on a specific feature file

#### Running your tests with cucumber tags:

To use tags you need to uncomment the tags properties in the `protractor-cucumber.conf.js` and add your own tags
Then you can launch your test with either the first or the second way
