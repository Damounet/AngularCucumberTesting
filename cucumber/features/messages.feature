Feature: Messages

  Scenario: Clear messages from dashboard page
    Given I am on toh
    Then messages page is visible
    When I click on clear button, mesages page is not visible anymore

  Scenario: Clear messages from heroes page
    Given I am on heroes page
    Then messages page is visible
    When I click on clear button, mesages page is not visible anymore

  Scenario: Clear messages from hero details page
    Given I am on hero details page which its name is 'Narco'
    Then messages page is visible
    When I click on clear button, mesages page is not visible anymore