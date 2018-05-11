Feature: Dashboard

  Scenario: Go on an hero details page from top heroes grid
    Given I am on toh
    Then top heroes grid is visible
    When I click on 'Narco' link button from top heroes grid
    Then I am on the hero page details
    When I click on the back button from the hero details page
    Then I am on the previous page

  Scenario: Go on an hero details page from search
    Given I am on toh
    Then search input is visible
    When I write 'Na' in the search input
    Then 'Narco' link button to his details page is visible
    When I click on 'Narco' link button from dashboard search page
    Then I am on 'Narco' hero page details
    When I click on the back button from the hero details page
    Then I am on the previous page