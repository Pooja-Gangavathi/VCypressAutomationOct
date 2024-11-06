describe('Radio Button and Check box Demo',()=>{
    
    it('Radio button',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/');

        cy.get('#male').should('not.be.checked');
        cy.get('#female').should('not.be.checked');
        cy.get('#cookieChoiceDismiss').click();
         //After Performing Action
         cy.get('#male').check().should('be.checked');
         cy.get('#female').click();
         cy.get('[type="radio"]').should('have.length','2');

       
    })

    it.only(' Checkbox', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#cookieChoiceDismiss').click();

        cy.get('[type="checkbox"]').check().should('be.checked');
     
        cy.get('[type="checkbox"]').uncheck().should('not.be.checked');

        //cy.wait(2000)

        //cy.get(':nth-child(9) > :nth-child(4)').click();
        cy.get(':nth-child(9) > :nth-child(4) > .form-check-label').click();

        //cy.get('#sunday').click();

    })
})