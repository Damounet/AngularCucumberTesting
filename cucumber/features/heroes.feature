Feature: Heroes

  Background: The user is on the heroes page
    Given the user is on the toh heroes page

  Scenario: The user add Varian Wrynn as a hero
    When the user writes 'Varian Wrynn' in the add bar
    And the user click on the add button
    Then 'Varian Wrynn' is displayed in the heroes list

  Scenario: The user delete Narco from the hero list
    When the user click on the 'Narco' delete button
    Then 'Narco' is not present anymore in the heroes list

  Scenario: The user goes on Narco details page from heroes page
    When the user click on the 'Narco' button
    Then the user is on the 'Narco' hero details page