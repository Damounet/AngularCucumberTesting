Feature: Herodetails page
    As a user
    I want to see my favorite heroes details
    So I can see a lot of informations about him !

    Background: I am on the Narco hero details page
        Given I am on the 'Narco' details page

    Scenario: I modify the hero name and come back to dashboard page using the save button
        When I type 'Ragnaros the firelord' in the name bar
        And I click on the save button
        Then I come back to the dashboard page
        And I can see 'Ragnaros the firelord' in the top heroes grid

    Scenario: I come back to dashboard page using the back button
        When I click on the back button
        Then I come back to the dashboard page
