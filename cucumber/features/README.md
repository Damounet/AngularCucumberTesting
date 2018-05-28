* [How to install and run the functionnal tests](../)
* [How to write steps files](../step_definitions)
* [How to write pages files](../pages)

# How to write Feature files

## Gherkin

    Feature: Initial state
        As a user
        I can see the Tour of Heroes Initial page
        So that I can navigate on all of the app

        Scenario: I go on the heroes page from the initial page
           Given I am on Tour of Heroes
           When I click on heroes button
           Then I am on the heroes page

The code above is written with Gherkin.
This is basically a language which is used to write functionnal testing.
As you can see it is really close to english speaking.

Gherkin works with keywords which are started all the Gherkin phrases.

## Feature / User story environment

    Feature: Initial state
        As a user
        I can see the Tour of Heroes Initial page
        So that I can navigate on all of the app

This is the Feature functionnal description.
Be as precise as possible.
Here, you have to describe the user story environment.

## Scenario

    Scenario: The user goes on the heroes page from the initial page

This is the Scenario functionnal description.
For one Feature, it is possible and common to have more than one Scenario.

## Steps

    Given the user is on Tour of Heroes
    When the user click on heroes button
    Then the user is on the heroes page
    And the heroes are displayed

All the phrases which are in a scenario and starts with the keywords Given, When or Then are
called Steps.

* The keyword **Given** is always described a scenario context.
* The keyword **When** is always described an user action.
* The keyword **Then** is always checked a result from an user action.
* The keyword **And** is always reproduced the above keyword, in this case And = Then

## Background / Scenario outline / Examples

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

The Background keyword does its steps before all the scenarios which are in the same feature.

A Scenario Outline is a Scenario which does its steps more than one time.
It always come with an Examples Table to give some values to the placeholder.
A placeholder is basically a variable.

An examples table is used to give some values to the Scenario outline placeholders.
This one has some values for the heroName placeholder, these values are 'Narco' and 'Magneta'.
Then, the concerned Scenario outline will be played two times with the two differents values.

# Our best practices

One Feature = One Feature file.

Understandable english.

The steps has to be written with the first person. The subject is the one described in the user story environment.
