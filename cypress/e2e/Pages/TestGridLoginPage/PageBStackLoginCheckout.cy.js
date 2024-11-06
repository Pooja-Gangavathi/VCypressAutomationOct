class LoginPage {
    enterURL() {
      cy.visit("https://bstackdemo.com/");
    }

    clickLogInLink() {
      cy.get('#signin').click();
      return this;
    }

    selectEmailPassword(username, password) {
     cy.get('#username').click();
     cy.get('#react-select-2-option-0-0').click();
     cy.get('#password').click();
     cy.get('#react-select-3-option-0-0').click();
      return this;
    }

    clickLoginButton() {
    cy.get('#login-btn').click();
    return this;
    }

    verifyUserLoggedIn() {
    cy.contains('Logout');
    return this
    }

     verifyPageTitle() {
       cy.url().should("eq", "https://bstackdemo.com/?signin=true");
       return this
    }

    addItemToCart() {
        cy.get('#\\31  > .shelf-item__buy-btn').click();
        cy.get('.float-cart__close-btn').click()
        cy.get('#\\35  > .shelf-item__buy-btn').click();
        cy.get('.float-cart__close-btn').click()
        cy.get('#\\39  > .shelf-item__buy-btn').click();
      return this;
    }
    verifycartItemCount(){
    cy.get('[class="bag"]').click();
    cy.get('.float-cart__shelf-container .shelf-item').its('length')
    .then((itemCount) =>{
        cy.log('Number of items in the cart', itemCount);
        expect(itemCount).to.be.greaterThan(0);
    })

     }
    clickCheckoutButton(){
    cy.get('.buy-btn').click();
    return this  
    }

    shippingDetails(FirstName,LastName,Address,State,PostalCode){
        cy.get('#firstNameInput').type(FirstName);
        cy.get('#lastNameInput').type(LastName);
        cy.get('#addressLine1Input').type(Address);
        cy.get('#provinceInput').type(State);
        cy.get('#postCodeInput').type(PostalCode);
    return this  
    }

    clickSubmitButton(){
    cy.get('#checkout-shipping-continue').click();
    return this  
    }
    }
    const login = new LoginPage();
    export default login;