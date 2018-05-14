Feature: Initial state

  Scenario: The user is on the Tour of Heroes' initial page
    Given the user is on Tour of Heroes
    And the browser page title is 'Tour of Heroes'
    And the page has the title 'Tour of Heroes'
    And the page has the Dashboard button
    And the page has the Heroes button
    And the page displays the dashboard

  Scenario: The user goes on the heroes page from the initial page
    Given the user is on Tour of Heroes
    When the user click on heroes button
    Then the user is on the heroes page

  Scenario: The user goes on the Dashboard page from the heroes page
    Given the user is on the toh heroes page
    When the user click on dashboard button
    Then the user is on the dashboard page


#Scenario: Initial state
#  Given I am on toh
#  Then has page title 'Tour of Heroes'
#  And on the initial page has h1 'Tour of Heroes'
#  And has view Dashboard
#  And has view Heroes
#  And has dashboard as the active view
