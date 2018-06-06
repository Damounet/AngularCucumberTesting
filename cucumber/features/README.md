[Writting steps](../step_definitions) | [Writting pages](../pages)

# How to write Feature files

This README is for all the team members, product owner, QA and developpers.

It describes how to write a good feature file with our own best practices.

## Gherkin

```Gherkin
    Feature : Get a coffee
	As a user
	I want a coffee
	To be hot

	Scenario : I get a cappuccino
	    Given I am in my office
	    And I can see that the coffee machine is fully functional
	    When I press the ‘cappuccino’ button
	    And I put ‘0.50’€ in the machine
	    Then I can see that the ‘cappuccino’ is prepared
	    And I can drink it

	Scenario : I get a latte
	    Given I am in my office
	    And I can see that the coffee machine is fully functional
	    When I press the ‘latte’ button
	    And I put ‘0.40’€ in the machine
	    Then I can see that the ‘latte’ is prepared
	    And I can drink it
```

The code above is written with Gherkin.
This language is used to write functionnal testing.
Gherkin is close to english speaking.

Gherkin works with keywords. These keywords start all the Gherkin's phrases.

## Feature / User story environment

```Gherkin
    Feature : Get a coffee
        As a user
        I want a coffee
        To be hot
```

This is the Feature functionnal description.
It describes the user story environment as well.

Be as precise as possible.
One file for one feature.

Feature contains one or more scenarios.

## Scenario

```Gherkin
    Scenario : I get a cappuccino
```

This is the Scenario functionnal description.

If there is more than one scenario in the file, they are sequentially executed.

Each scenario contains some steps.

## Steps

```Gherkin
    Given I am in my office
    And I can see that the coffee machine is fully functional
    When I press the ‘cappuccino’ button
    And I put ‘0.50’€ in the machine
    Then I can see that the ‘cappuccino’ is prepared
    And I can drink it
```

A Step is a Gherkin's phrase which starts with the keywords Given, When or Then.

* The keyword **Given** describes a scenario context.
* The keyword **When** describes an user action.
* The keyword **Then** checks a result from an user action.
* The keyword **And** reproduces the previous keyword.

A step has to be simple and reusable.

## Background / Scenario outline / Examples

```Gherkin
Feature : Get a coffee (Scenario outline/variable)
    As a user
    I want a coffee
    To be hot

    Background :
        Given I am in my office
        And I can see that the coffee machine is fully functional

    Scenario Outline : I get a coffee
        When I press the <coffeeType> button
        And I put <coffeeValue> in the machine
        Then I can see that the <coffeeType> is prepared
        And I can drink it

    Examples :
        |  coffeeType  | coffeeValues |
        | 'cappuccino' |     '0.50'   |
        |   'latte'    |     '0.40'   |
```

The **Background** keyword describes the context of all the scenarios in the feature file.
The background is unique and it runs automatically before each scenarios.

The **Scenario Outline** steps provide a template which is never directly run. A Scenario Outline is run once for each row in the **Examples** section beneath it (not counting the first row).

The way this works is via placeholders. Placeholders must be contained within < > in the Scenario Outline's steps. These placeholders act as variables.

Data are surrounded with simple quotes because of Typescript usage, they are mandatory.

# Our best practices

One Feature = One Feature file.

The tests have to be written with the best english possible. Everyone have to be able to understand the scenarios, even a non team member.

The steps have to be written with the first person. The subject is the one described in the user story environment.

Steps have to be simple and reusable.
