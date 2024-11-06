describe('Login with same User',function(){
    it('Login with same user',()=>{
        cy.visit('https://tutorialsninja.com/demo/')

        cy.get('.caret').click()

        cy.get('.dropdown-menu > :nth-child(2) > a').click()

        cy.get('#input-email').type('abcd@123.com')

        cy.get('#input-password').type('abcd@123')

        cy.get('form > .btn').click()
    })
})