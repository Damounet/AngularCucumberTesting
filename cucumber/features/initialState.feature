Feature: Initial state

  Scenario: Initial state
    Given I am on toh
    Then has page title 'Tour of Heroes'
    And on the initial page has h1 'Tour of Heroes'
    And has view Dashboard
    And has view Heroes
    And has dashboard as the active view
