Feature: Messages page
  As a user
  I wan't to see the messages
  So that I have a reminder

  Scenario: I clear messages from dashboard page
    Given I am on Tour of Heroes
    And I see the message page
    When I click on the clear button
    Then I can't see the messages page anymore

  Scenario: I clear messages from heroes page
    Given I am on the toh heroes page
    And I see the message page
    When I click on the clear button
    Then I can't see the messages page anymore

  Scenario: I clear messages from hero details page
    Given I am on the 'Narco' details page
    And I see the message page
    When I click on the clear button
    Then I can't see the messages page anymore