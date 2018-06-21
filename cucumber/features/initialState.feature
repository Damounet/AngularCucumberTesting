Feature: Initial state page
  As a user
  I want to see Tour of Heroes fully load
  So that I can navigate through the Tour of Heroes

  Scenario: I am on the Tour of Heroes' initial page
    Given I am on Tour of Heroes
    And I see that the browser page title is 'Tour of Heroes'
    And I see that the page has the title 'Tour of Heroes'
    And I see the Dashboard button
    And I see the Heroes button
    And I see the dashboard

  Scenario: I go on the heroes page from the initial page
    Given I am on Tour of Heroes
    When I click on heroes button
    Then I am on the heroes page

  Scenario: I go on the Dashboard page from the heroes page
    Given I am on the toh heroes page
    When I click on dashboard button
    Then I am on the dashboard page