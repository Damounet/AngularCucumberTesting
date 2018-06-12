[Writting steps](../step_definitions) | [Writting pages](../pages)

# How to write Feature files

Cucumber library is our way to test our application. Cucumber is very powerful and allows to split the work on the functionnal tests into three core business.

The feature files are in the PO Scope, this document has been created to allow a PO to write a good feature file with our own best practices.

<!-- In this document, a product owner can learn how to write a good feature file with our own best practices.

The purpose is about writting all the functionnal tests and the tests booklet at the same time.

To write good feature files means to write all functionnal tests and tests booklets.

This document concerns the product owner.

It describes how to write a good feature file with our own best practices. -->

## Feature files

Feature files are the feature functionnal description. They contain scenarios to test the concerns feature. All the application's feature files can be use as the application's test booklet.

To create a feature file, the PO has to place it in /cucumber/features and name it 'featureName.feature'.

They are written in Gherkin.

<!-- A feature file contains a feature and somes scenarios to test a feature.

A feature file is name 'featureName.feature'. Its place is in /cucumber/features.

Feature files can be use as a test booklet.

Feature files are written in Gherkin. -->

## Gherkin

This language is used to write functionnal testing.

Gherkin lets you express the behavior of your app using natural language that can be understood by business experts and non-technical QA staff.

Gherkin works with keywords. These keywords start each the Gherkin's phrases.

[Gherkin reference](https://docs.cucumber.io/gherkin/reference/)

### Example

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

## Feature

This is the Feature functionnal description.
It describes the feature environment as well.

Each feature file start with the feature functionnal description.

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

Each scenario contains some steps. A scenario with its steps can be use as an acceptance criteria for a scrum/kanban project. [Read more about acceptance criteria.](https://rubygarage.org/blog/clear-acceptance-criteria-and-why-its-important)

```Gherkin
    Scenario : I select a cappuccino on the coffee machine and I get it
```

## Steps

A Step is a Gherkin's phrase which starts with the keywords Given, When or Then.

* The keyword **Given** describes a scenario context.
* The keyword **When** describes an user action.
* The keyword **Then** checks a result from an user action.
* The keyword **And** reproduces the previous keyword. It allows to add more details to a context (Given), to add another user action (When) or to add another check (Then).

A step has to be reusable.

### Example

```Gherkin
    Given I am in my office
    And I can see that the coffee machine is fully functional
    When I press the ‘cappuccino’ button
    And I put ‘0.50’€ in the machine
    Then I can see that the ‘cappuccino’ is prepared
    And I can drink my 'cappuccino'
```

In this example, cappuccino and 0.50 are surrounded with simple quotes. These simple quotes means that it is a variable. It means the phrase is reusable if you change the variable.

```Gherkin
    Given I am in my office
    And I can see that the coffee machine is fully functional
    When I press the ‘latte’ button
    And I put ‘0.40’€ in the machine
    Then I can see that the ‘latte’ is prepared
    And I can drink my 'latte'
```

This other scenario don't need any change in the code to work because the only changes are about changes variables values.

## Background / Scenario outline / Examples

Given the beneath example :

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

This example has some problem, first the context is the same for a cappuccino or a latte. When it happens, the **Background** keyword usage is the best thing to do.

The **Background** keyword describes the context of all the scenarios in a feature file.
The background is unique and it runs automatically before each scenario.

Let's see how it improves our feature readability :

```Gherkin
    Feature : Get a coffee
	As a user
	I want a coffee

    Background :
        Given I am in my office
        And I can see that the coffee machine is fully functional

	Scenario : I select a cappuccino on the coffee machine and I get it
	    When I press the ‘cappuccino’ button
	    And I put ‘0.50’€ in the machine
	    Then I can see that the ‘cappuccino’ is prepared
	    And I can drink my 'cappuccino'

	Scenario : I select a latte on the coffee machine and I get it
	    When I press the ‘latte’ button
	    And I put ‘0.40’€ in the machine
	    Then I can see that the ‘latte’ is prepared
	    And I can drink my 'latte'
```

There is still a huge problem. The only things that change between these two scenarios are the variables values. The **Scenario Outline** is the solution here.

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

* Everyone has to be able to understand the scenarios, even a non technical member.

* Steps have to be written with the first person. The subject is the one described in the user story environment.
