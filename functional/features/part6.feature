Feature: Tutorial part 6

  Scenario: Initial page
    Given I am on toh
    Then has title 'Tour of Heroes'
    Then has h1 'Tour of Heroes'
    Then has views Dashboard,Heroes
    Then has dashboard as the active view

  Scenario: Dashboard tests
    Given I am on toh
    Then has top heroes
    When selects and routes to "Magneta" details
    When updates hero name (MagnetaX) in details view
    When cancels and shows Magneta in Dashboard
    When selects and routes to Magneta details
    When updates hero name (MagnetaX) in details view
    When saves and shows MagnetaX in Dashboard

  Scenario: Heroes tests
    Given I am on toh
✓ can switch to Heroes view
✓ can route to hero details
✓ updates hero name (MagnetaX) in details view
✓ shows MagnetaX in Heroes list
✓ deletes MagnetaX from Heroes list
✓ adds back Magneta
✓ displays correctly styled buttons

  Scenario: Progressive hero search
    Given I am on toh
✓ searches for 'Ma'
✓ continues search with 'g'
✓ continues search with 'e' and gets Magneta
✓ navigates to Magneta details view
