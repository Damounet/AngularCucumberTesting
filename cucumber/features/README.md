[Writting steps](../step_definitions) | [Writting pages](../pages)

# How to write Feature files


Feature files are the functional description of the tests. They contain scenarios to test each feature. All the application's feature files can be use as the application's test documentation.

They contain a single Feature definition for the system under test and are an executable test script.

Feature file's place is in /cucumber/features or any subfolder. All feature files have the .feature` file extension.

They are written in Gherkin.

## Gherkin

Gherkin is the language that Cucumber uses to define test cases. It is designed to be non-technical and human readable, and collectively describes use cases relating to a software system. The purpose behind Gherkin's syntax is to promote Behavior Driven Development practices across an entire development team, including business analysts and managers. It seeks to enforce firm, unambiguous requirements starting in the initial phases of requirements definition by business management and in other stages of the development lifecycle. (from [Wikipedia](https://en.wikipedia.org/wiki/Cucumber_(software)#Gherkin_language))


Gherkin works with keywords. These keywords start each Gherkin phrases. [Gherkin reference](https://docs.cucumber.io/gherkin/reference/)

### Example

```Gherkin
    Feature : Get a coffee
	As a user
	I want a coffee

	Scenario : I select a cappuccino on the coffee machine and I get it
	    Given I am in my office
	    And I can see that the coffee machine is fully functional
	    When I press the 'cappuccino’ button
	    And I put '0.50’€ in the machine
	    Then I can see that the 'cappuccino’ is prepared
	    And I can drink my 'cappuccino'

	Scenario : I select a latte on the coffee machine and I get it
	    Given I am in my office
	    And I can see that the coffee machine is fully functional
	    When I press the 'latte’ button
	    And I put '0.40’€ in the machine
	    Then I can see that the 'latte’ is prepared
	    And I can drink my 'latte'
```

## Feature

A feature is a Use Case that describes a specific function of the software being tested. There are three parts to a Feature.

  - The Feature: keyword
  - The Feature name (on the same line as the keyword)
  - An optional description on the following lines


```Gherkin
    Feature : Get a coffee
        As a user
        I want a coffee
```

A feature file contains one or more scenarios.
If there is more than one scenario in it, they are sequentially executed.

## Scenario

This is the Scenario functional description.

Each scenario contains  a collection of steps. A scenario with its steps can be used as an acceptance criteria for a user story. [Read more about acceptance criteria.](https://rubygarage.org/blog/clear-acceptance-criteria-and-why-its-important)

```Gherkin
    Scenario : I select a cappuccino on the coffee machine and I get it
```


## Steps

A Step is a Gherkin phrase which starts with either:

* **Given** describes a scenario context and the initial state of the application.
* **When** describes a user action.
* **Then** checks a result from a user action.
* **And** reproduces the previous keyword. It allows to add more details to a context (Given), to add another user action (When) or to add another check (Then).

A step needs to be reusable.

### Example

```Gherkin
    Given I am in my office
    And I can see that the coffee machine is fully functional
    When I press the 'cappuccino’ button
    And I put '0.50’€ in the machine
    Then I can see that the 'cappuccino’ is prepared
    And I can drink my 'cappuccino'
```

In this example, cappuccino and 0.50 are surrounded with simple quotes. These simple quotes means that it is a variable. It means the phrase is reusable if you change the variable.

```Gherkin
    Given I am in my office
    And I can see that the coffee machine is fully functional
    When I press the 'latte' button
    And I put '0.40'€ in the machine
    Then I can see that the 'latte' is prepared
    And I can drink my 'latte'
```

This other scenario does not need any more work beneath because only variables values changed. A product owner can creates its own scenario if all the action he want to do exists.

## Background / Scenario outline / Examples

We can enhance the last 2 examples and use the **Background** keyword to shorten them.

The **Background** keyword describes the context of all the scenarios of the feature file.
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
	    When I press the 'cappuccino’ button
	    And I put '0.50’€ in the machine
	    Then I can see that the 'cappuccino’ is prepared
	    And I can drink my 'cappuccino'

	Scenario : I select a latte on the coffee machine and I get it
	    When I press the 'latte’ button
	    And I put '0.40’€ in the machine
	    Then I can see that the 'latte’ is prepared
	    And I can drink my 'latte'
```

**Scenario Outline** is another tool used for templating scenarios. A Scenario Outline is run once for each row in the **Examples** section beneath it.

Set placeholders, surrounded with **< >**, in your steps to take place of the existing variables.

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
