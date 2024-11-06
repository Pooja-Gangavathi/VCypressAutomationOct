Feature: Login into the site with valid data

  Background: Navigate to the Website
      Given I navigate to the Website

Scenario: Login into the application with valid data
      When I click on Sign In Link
      And I entered valid credential
          | email    | validpassword |
          | demouser | testingisfun99     |
      And Click on Log in button
     Then Validate user is logged in
     Then Validate the title after login
     And I added the items to the cart
     And Validate the number of items in cart
     Then I clicked on Checkout button
     And I added the shipping details
    | FirstName    | LastName       |   Address     | State       |  PostalCode   |
    | Pooja        | Gangavathi     |   Abcd 90     | Stockholm   |  12345        |
     Then I clicked on Submit Button

