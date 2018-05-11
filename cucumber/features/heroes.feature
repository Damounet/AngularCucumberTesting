Feature: Heroes

  Scenario: Go on an hero details page from heroes page
    Given I am on toh
    Then has view Heroes
    When I click on the heroes button
    Then I am on the heroes page
    And 'Narco' link button to his details page is visible
    When I click on 'Narco' link button from heroes page
    Then I am on 'Narco' hero page details
    When I click on the back button from the hero details page
    Then I am on the previous page

  Scenario: Add a new hero
    Given I am on heroes page
    When I write 'Valeera Sanguinar' in the add input
    And I click on the add button and 'Valeera Sanguinar' is visible on the heroes page 

  Scenario: Delete an hero
    Given I am on heroes page
    When I click on the 'Narco' delete button and the hero is not visible anymore on the heroes page