* [How to install and run the functionnal tests](../)
* [How to write steps files](../step_definitions)
* [How to write pages files](../pages)

# How to write Feature files

## Gherkin

    Feature: Initial state
        Scenario: The user goes on the heroes page from the initial page
           Given the user is on Tour of Heroes
           When the user click on heroes button
           Then the user is on the heroes page

The code above is written with Gherkin.
This is basically a language which is use to write functionnal testing.
As you can see it is really close to english speaking.

Gherkin is working with keywords which are starting all the Gherkin phrases.

## Feature

    Feature: Initial state

This is the Feature functionnal description.
Be as precise as possible.
Here, you have to describe the user story environment.

## Scenario

    Scenario: The user goes on the heroes page from the initial page

This is the Scenario functionnal description.
For one Feature, it is possible and common to have more than one Scenario.

## Steps

    >       Given the user is on Tour of Heroes
    >       When the user click on heroes button
    >       Then the user is on the heroes page

All the phrases which are in a scenario and started with the keywords Given, When or Then are
called Steps.

* The keyword **Given** is always described a scenario context.
* The keyword **When** is always described an user action.
* The keyword **Then** is checked a result from an user action.

## Background

    > Feature: Dashboard
    >   Background: The user is on Tour of Heroes and the page is displaying the dashboard
    >       Given the user is on Tour of Heroes
    >       And the page displays the dashboard

The Background keyword is doing its steps before all the scenarios which are in the same feature.
The And keyword is used to says that it is the same keyword than the above one.

## Scenario outline/Examples

    > Scenario Outline: The user click on Narco in the top heroes grid
    >   When the user clicks on <heroName> button from top heroes grid
    >   Then the user is on the <heroName> hero details page
    > Examples: Hero name
    >   | heroName  |
    >   | 'Narco'   |
    >   | 'Magneta' |

A Scenario Outline is a Scenario which is doing its steps more than one time.
It always come with an Examples Table to give some values to the placeholder.
A placeholder is basically a variable.

An examples table is used to give some values to the Scenario outline placeholders.
This one has some values for the heroName placeholder, these values are 'Narco' and 'Magneta'.
Then, the concerned Scenario outline will be played two times with the two differents values.

# Our best practices

One Feature = One Feature file.

Understandable english.

Steps order :

* A Given step can be followed by a When or another Given (write it And) or nothing.
* A When step can be followed by a Then or another When (write it And).
* A Then step can be followed by another Then (write it And) or nothing or a When if it is really necessary and if there is no other possibility to separate the Scenario in two scenarios.

You can write steps with the third person, this is always good, and with the first person.
If you are using the first person, it is referencing to the user describe in the user story environment which is in the Feature keyword. If there is no user describe in the user story environment, then always use the third person.
