Feature: Messages

  Scenario: Clear messages from dashboard page
    Given the user is on Tour of Heroes
    And the message page is visible
    When the user click on the clear button
    Then the messages page is not visible anymore

  Scenario: Clear messages from heroes page
    Given the user is on the toh heroes page
    And the message page is visible
    When the user click on the clear button
    Then the messages page is not visible anymore

  Scenario: Clear messages from hero details page
    Given the user is on the 'Narco' details page
    And the message page is visible
    When the user click on the clear button
    Then the messages page is not visible anymore