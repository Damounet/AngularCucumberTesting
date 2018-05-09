Feature: Tutorial part 6

  Scenario: Initial page
    Given I am on toh
    Then has page title 'Tour of Heroes'
    Then on the initial page has h1 'Tour of Heroes'
    Then has view Dashboard
    Then has view Heroes
    Then has dashboard as the active view

  Scenario: Go on an hero details page
    Given I am on toh
    Then top heroes grid is visible
    When I click on the first hero in the heroes grid
    Then I am on the hero page details

  #Scenario: Dashboard tests
    #Given I am on toh
    #Then has top heroes
    #When selects and routes to "Magneta" details
    #When updates hero name "MagnetaX" in details view
    #When cancels and shows "Magneta" in Dashboard
    #When selects and routes to "Magneta" details
    #When updates hero name "MagnetaX" in details view
    #When saves and shows "MagnetaX" in Dashboard

