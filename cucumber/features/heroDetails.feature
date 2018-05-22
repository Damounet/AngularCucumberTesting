Feature: Herodetails page

    Background: The user is on the Narco hero details page
        Given the user is on the 'Narco' details page
            

    Scenario: The user modifies the hero name and come back to dashboard page using the save button
        When the user types 'Ragnaros the firelord' in the name bar
        And the user click on the save button
        Then the user come back to the dashboard page
        And 'Ragnaros the firelord' is visible in the top heroes grid

    Scenario: The user come back to dashboard page using the back button
        When the user click on the back button
        Then the user come back to the dashboard page
