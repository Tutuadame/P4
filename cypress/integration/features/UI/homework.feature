Feature: Navigating to libri.hu and checking basic options
  @test
  Scenario: Perform Navigation
    Given I open the Libri web url
    Then I verify title of web page as 'Libri.hu - Online könyváruház'

  Scenario: Close starting pop-up
    Given I open the Libri web url
    When Pop-ups shown, should be closed after
    Then Pop-ups shouldnt be displayed
    
  Scenario: Check search
    Given I open the Libri web url
    When I close pop-ups
    And I type 'Vaják' in the search field
    And Click on the search button
    Then Found books should be shown

  Scenario: Home page Libri title should be linked
    Given I open the Libri web url
    When I close pop-ups
    And I click on the Home page title
    Then It should throw back to the Main page

  Scenario: Menu option Fizetés és szállítás
    Given I open the Libri web url
    When I close pop-ups
    And I click on the Fizetés és szállítás option
    Then It should navigate me to a new page describing that
  
  Scenario: Navigating to detailed search
    Given I open the Libri web url
    When I close pop-ups
    And I click on the Részletes keresés option
    Then It should navigate me to a new page to use it
    
  Scenario: Using detailed search
    Given I open the Libri web url
    When I close pop-ups
    And I click on the Részletes keresés option
    And I type in 'Babits Mihály' in the name field
    And I click on Keresés button
    Then It should navigate me to a new page showing products related to the given infromation

  Scenario: Possible to put item in the shopping cart
    Given I open the Libri web url
    When I close pop-ups
    And I type 'Babits Mihály' in the search field
    And I click on the search button
    And I click on one item to put in the shopping cart
    Then It should make a sign about the picked item

  Scenario: Possible to put items in the shopping cart
    Given I open the Libri web url
    When I close pop-ups
    And I type 'Babits Mihály' in the search field
    And I click on the search button
    And I click on items to put in the shopping cart
    Then It should make a sign about the picked items
    
  Scenario: Possible to view picked items by clicking
    Given I open the Libri web url
    When I close pop-ups
    And I type 'Babits Mihály' in the search field
    And I click on the search button
    And I click on one item to put in the shopping cart
    And I click on the items I picked in the top right corner
    Then It should show a list about the order  