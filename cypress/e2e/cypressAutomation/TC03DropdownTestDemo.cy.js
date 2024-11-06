describe("Dropdown, Demo", ()=>{

    it("Dropdown with Select, Demo", ()=>{

       cy.visit("https://www.zoho.com/commerce/free-demo.html");
         
       cy.get('.zbc-cta-accept > .zbc-cta').click();

       cy.get('#zcf_address_country').select('India');

       cy.get('#zcf_address_country').select('Nepal').should('have.value','Nepal');

       cy.wait(2000);

       cy.get('#zcf_address_country').select(0).should('have.value','Afghanistan');

       cy.wait(2000);

       cy.get('#zcf_users').select(3).should('have.value',"Not selling, but I'm interested to");

       cy.get('.content-wrap-details > :nth-child(2)').should('have.text',"Witness Zoho Commerce in action").contains('Commerce in');

       cy.pause();

       cy.get('[name="Email"]').type("Demo Application");

    })

    it('Dropdown without Select', ()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('Argentina').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text',"Argentina")

        cy.get('#select2-billing_state-container').type('Chubut{enter}')

        cy.get('#select2-billing_state-container').type('Chubut{enter}').should('have.text',"Chubut")



    })

    it.only('Dynamic Dropdown',()=>{
        cy.visit('https://www.google.com/')

        cy.get('#W0wltc > .QS5gu').click();

        cy.get('#APjFqb').type('Cypress Automation')

        cy.get('div.wM6W7d').should('have.length','13')
        cy.wait(2000)
        //cy.contains('cypress automation tool').click();
        cy.wait(2000)

       // cy.contains('Bilder').click();
       cy.get('div.wM6W7d').each(($el, index, $list) => {
        if($el.text() == 'cypress automation tool')
            {
                cy.wrap($el).click();
            }
       })
    })
})