Feature: Herodetails page

Scenario: Modify an hero name
    Given I am on hero details page which its name is 'Narco'
    When I am modifying the name by 'Varian Wrynn'
    And I click on the save button
    Then I am on the Dashboard page
    And the hero which name is 'Varian Wrynn' is visble in top heroes grid