[Writting steps](../step_definitions) | [Writting pages](../pages)

# How to write Feature files

This README is for all the team members, product owner, QA and developpers.

It describes how to write a good feature file with our own best practices.

## Gherkin

```Gherkin
    Feature: Initial state
        As a user
        I can see the Tour of Heroes Initial page
        So that I can navigate on all of the app

        Scenario: I go on the heroes page from the initial page
           Given I am on Tour of Heroes
           When I click on heroes button
           Then I am on the heroes page
           And I see the heroes list
```

The code above is written with Gherkin.
This is a language which is used to write functionnal testing.
Gherkin is close to english speaking.

Gherkin works with keywords. These keywords start all the Gherkin's phrases.

## Feature / User story environment

```Gherkin
    Feature: Initial state
        As a user
        I can see the Tour of Heroes Initial page
        So that I can navigate on all of the app
```

This is the Feature functionnal description.
It describes the user story environment as well.

Be as precise as possible.
One file for one feature.

Feature contains scenarios.
For one Feature, it is possible and common to have more than one scenario.

## Scenario

```Gherkin
    Scenario: The user goes on the heroes page from the initial page
```

This is the Scenario functionnal description.
If there is more than one scenario in the file, they are sequentially executed.

Each scenario contains some steps which start with a Gherkin keyword.

## Steps

```Gherkin
    Given I am on Tour of Heroes
    When I click on heroes button
    Then I am on the heroes page
    And I see the heroes list
```

All the phrases which are in a scenario and starts with the keywords Given, When or Then are called Steps.

* The keyword **Given** describes a scenario context.
* The keyword **When** describes an user action.
* The keyword **Then** checks a result from an user action.
* The keyword **And** reproduces the above keyword, in this case And = Then

The steps have to be simple and reusable.

## Background / Scenario outline / Examples

```Gherkin
    Feature: Dashboard
        As a user
        I can see the top heroes grid and click on one of them
        So that I can modify the heroes names and I can see the most popular of them

        Background: I am on Tour of Heroes and the page is displaying the dashboard
            Given I am on Tour of Heroes
            And I can see the dashboard

        Scenario Outline: I click on Narco in the top heroes grid
            When I click on <heroName> button from top heroes grid
            Then I am on the <heroName> hero details page

            Examples: Hero name
                | heroName  |
                | 'Narco'   |
                | 'Magneta' |
```

The **Background** keyword describes the context of all the scenarios in the feature file.
The background is unique and it runs automatically before each scenarios.

The **Scenario Outline** steps provide a template which is never directly run. A Scenario Outline is run once for each row in the **Examples** section beneath it (not counting the first row).

The way this works is via placeholders. Placeholders must be contained within < > in the Scenario Outline's steps. These placeholders act as variables.

The simple quotes which surrounds the data in the _Example Table_ are mandatory because we use Typescript to test.

# Our best practices

One Feature = One Feature file.

The tests have to be written with the best english possible. Everyone have to be able to understand the scenarios, even a non team member.

The steps have to be written with the first person. The subject is the one described in the user story environment.

Steps have to be simple and reusable.
