Feature: Dashboard page
  As a user
  I want to access to dashboard, see the top heroes and look for one specific hero
  So I can see my favorite heroes

  Background: I am on Tour of Heroes and I see the dashboard
    Given I am on Tour of Heroes
    And I see the dashboard

  Scenario Outline: I click on Narco in the top heroes grid
    When I click on <heroName> button from top heroes grid
    Then I am on the <heroName> hero details page

    Examples: Hero name
      | heroName  |
      | 'Narco'   |
      | 'Magneta' |

  Scenario Outline: I look for Narco with the search
    Given I see the search bar
    When I write <searchChars> in the search bar
    Then I can see <heroName> button in the search result

    Examples: Search examples
      | heroName  | searchChars |
      | 'Narco'   | 'Na'        |
      | 'Magneta' | 'Gne'       |

  Scenario Outline: I go to the Narco details page from search results
    Given I see <heroName> button in the search result
    When I click on the <heroName> button from the search result
    Then I am on the <heroName> hero details page

    Examples: Hero name
      | heroName  |
      | 'Narco'   |
      | 'Magneta' |