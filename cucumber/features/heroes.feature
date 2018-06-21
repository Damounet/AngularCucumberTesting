Feature: Heroes page
  As a user
  I want to see all the heroes already present on Tour of Heroes
  So I can add another and read about a lot of them and learn more about them

  Background: I am on the heroes page
    Given I am on the toh heroes page

  Scenario: I add Varian Wrynn as a hero
    When I write 'Varian Wrynn' in the add bar
    And I click on the add button
    Then I can see 'Varian Wrynn' in the heroes list

  Scenario: I delete Narco from the hero list
    When I click on the 'Narco' delete button
    Then I can't see 'Narco' in the heroes list anymore

  Scenario: I go on Narco details page from heroes page
    When I click on the 'Narco' button
    Then I am on the 'Narco' hero details page