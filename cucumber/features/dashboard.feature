@dashboard
Feature: Dashboard

  Background: The user is on Tour of Heroes and the page is displaying the dashboard
    Given the user is on Tour of Heroes
    And the page displays the dashboard

  @topHeroes
  Scenario Outline: The user click on Narco in the top heroes grid
    When the user clicks on <heroName> button from top heroes grid
    Then the user is on the <heroName> hero details page

    Examples: Hero name
      | heroName  |
      | 'Narco'   |
      | 'Magneta' |

  @searchHero
  Scenario Outline: The user look for Narco with the search
    Given the search bar is visible
    When the user writes <searchChars> in the search bar
    Then <heroName> button is visible in the search result

    Examples: Search examples
      | heroName  | searchChars |
      | 'Narco'   | 'Na'        |
      | 'Magneta' | 'Gne'       |

  Scenario Outline: The user goes to the Narco details page from search results
    Given <heroName> button is displayed in the search result
    When the user click on the <heroName> button from the search result
    Then the user is on the <heroName> hero details page

    Examples: Hero name
      | heroName  |
      | 'Narco'   |
      | 'Magneta' |



#Scenario: Go on an hero details page from top heroes grid
#  Given I am on toh
#  When I click on 'Narco' link button from top heroes grid
#  Then I am on the hero page details


#  When I click on the back button from the hero details page
#  Then I am on the previous page

#Scenario: Go on an hero details page from search
# Given I am on toh
#Then search input is visible
#When I write 'Na' in the search input
#Then 'Narco' link button to his details page is visible
#When I click on 'Narco' link button from dashboard search page
#Then I am on 'Narco' hero page details
#When I click on the back button from the hero details page
#Then I am on the previous page