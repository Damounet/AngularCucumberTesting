# angularFunctionnalTesting

Testing the Tour of Heroes Tutorial app using protractor and cucumber.

# Writing the features files

[How to write features files](./features)

# Writing the steps files

[How to write steps files](./step_definitions)

# Writing the pages files

[How to write pages files](./pages)

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

## Running tour of heroes cucumber functionnal tests:

`protractor protractor-cucumber.conf.js` to run all tests with all features files
`protractor protractor-cucumber.conf.js --specs cucumber/features/heroes.feature` to run test on a specific feature file

## Running your tests with cucumber tags:

To use tags you need to uncomment the tags properties in the `protractor-cucumber.conf.js` and add your own tags
Then you can launch your test with either the first or the second way

## Running your test with parallel execution

You need to uncomment these lines :

```
/* ,
shardTestFiles: true,
maxInstances: 3 */
```

in the `protractor-cucumber.conf.js` file
You can modify the maxInstances number if you need more of them.
WARNING : The html report won't be relevant after a parallel execution test

## Generating the html report

First, you need to run the tour of heroes cucumber functionnal tests with `protractor protractor-cucumber.conf.js`
Then you need to run `node index.js`
