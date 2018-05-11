Feature: Tutorial part 6

  Scenario: Initial page
    Given I am on toh
    Then has page title 'Tour of Heroes'
    And on the initial page has h1 'Tour of Heroes'
    And has view Dashboard
    And has view Heroes
    And has dashboard as the active view

  Scenario: Go on an hero details page via top heroes grid
    Given I am on toh
    Then top heroes grid is visible
    When I click on the hero which id is 12 in the heroes grid
    Then I am on the hero page details

  Scenario: Modify an hero name
    Given I am on hero details page which id is 12
    When I am modifying the name by 'Varian Wrynn'
    And I click on the save button
    Then I am on the Dashboard page
    And the hero which id is 12 has 'Varian Wrynn' as name

  #Scenario: Dashboard tests
    #Given I am on toh
    #Then has top heroes
    #When selects and routes to "Magneta" details
    #When updates hero name "MagnetaX" in details view
    #When cancels and shows "Magneta" in Dashboard
    #When selects and routes to "Magneta" details
    #When updates hero name "MagnetaX" in details view
    #When saves and shows "MagnetaX" in Dashboard

