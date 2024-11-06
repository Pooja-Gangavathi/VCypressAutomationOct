describe('Tutorial ninja Registration',function(){
    it('Registration page',()=>{
    cy.visit('https://tutorialsninja.com/demo/')
    //cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
    cy.get('.caret').click()

    cy.get('.dropdown-menu > :nth-child(1) > a').click()

    cy.get('#input-firstname').type('Pooja')

    cy.get('#input-lastname').type('G V')

    cy.get('#input-email').type('abcd@123.com')

    cy.get('#input-telephone').type('9012345678')

    cy.get('#input-password').type('abcd@123')

    cy.get('#input-confirm').type('abcd@123')

    cy.get('[type="checkbox"]').click()

    cy.get('.pull-right > .btn').click()

    cy.get('.pull-right > .btn').click()
    })

    
})

   