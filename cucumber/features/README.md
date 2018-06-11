[Writting steps](../step_definitions) | [Writting pages](../pages)

# How to write Feature files

This README is for the product owner.

It describes how to write a good feature file with our own best practices.

## Feature files

A feature file contains a feature and somes scenarios to test this feature.

A feature file is name 'featureName.feature'. Its place is in /cucumber/features.

A feature file can be use as a test booklet.

Steps files are written with Gherkin.

## Gherkin

This language is used to write functionnal testing.

Gherkin lets you express the behavior of your app using natural language that can be understood by business experts and non-technical QA staff.

Gherkin works with keywords. These keywords start all the Gherkin's phrases.

[Gherkin reference](https://docs.cucumber.io/gherkin/reference/)

### Full example

```Gherkin
    Feature : Get a coffee
	As a user
	I want a coffee

	Scenario : I select a cappuccino on the coffee machine and I get it
	    Given I am in my office
	    And I can see that the coffee machine is fully functional
	    When I press the ‘cappuccino’ button
	    And I put ‘0.50’€ in the machine
	    Then I can see that the ‘cappuccino’ is prepared
	    And I can drink my 'cappuccino'

	Scenario : I select a latte on the coffee machine and I get it
	    Given I am in my office
	    And I can see that the coffee machine is fully functional
	    When I press the ‘latte’ button
	    And I put ‘0.40’€ in the machine
	    Then I can see that the ‘latte’ is prepared
	    And I can drink my 'latte'
```

## Feature / User story environment

This is the Feature functionnal description.
It describes the user story environment as well.

Be as precise as possible.
One file for one feature.

Feature contains one or more scenarios.

```Gherkin
    Feature : Get a coffee
        As a user
        I want a coffee
```

## Scenario

This is the Scenario functionnal description.

If there is more than one scenario in the file, they are sequentially executed.

Each scenario contains some steps.

```Gherkin
    Scenario : I select a cappuccino on the coffee machine and I get it
```

## Steps

A Step is a Gherkin's phrase which starts with the keywords Given, When or Then.

* The keyword **Given** describes a scenario context.
* The keyword **When** describes an user action.
* The keyword **Then** checks a result from an user action.
* The keyword **And** reproduces the previous keyword.

A step has to be simple and reusable.

```Gherkin
    Given I am in my office
    And I can see that the coffee machine is fully functional
    When I press the ‘cappuccino’ button
    And I put ‘0.50’€ in the machine
    Then I can see that the ‘cappuccino’ is prepared
    And I can drink my 'cappuccino'
```

## Background / Scenario outline / Examples

The **Background** keyword describes the context of all the scenarios in the feature file.
The background is unique and it runs automatically before each scenarios.

The **Scenario Outline** steps provide a template which is never directly run. A Scenario Outline is run once for each row in the **Examples** section beneath it (not counting the first row).

The way this works is via placeholders. Placeholders must be contained within < > in the Scenario Outline's steps. These placeholders act as variables.

Data are surrounded with simple quotes because of Typescript usage, they are mandatory.

### Full example

```Gherkin
Feature : I select a coffee type on the coffee machine and I get it
    As a user
    I want a coffee

    Background :
        Given I am in my office
        And I can see that the coffee machine is fully functional

    Scenario Outline : I get a coffee
        When I press the <coffeeType> button
        And I put <coffeeValue> in the machine
        Then I can see that the <coffeeType> is prepared
        And I can drink my <coffeeType>

    Examples :
        |  coffeeType  | coffeeValues |
        | 'cappuccino' |     '0.50'   |
        |   'latte'    |     '0.40'   |
```

# Our best practices

* One functionnal feature = One Feature file.

* Everyone have to be able to understand the scenarios, even a non team member.

* Steps have to be written with the first person. The subject is the one described in the user story environment.

* A reusable step doesn't depend on its context.
