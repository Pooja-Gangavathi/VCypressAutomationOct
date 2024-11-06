describe('Assertion Demo', function(){

  
    it('Assertion Demo - Implicit Assertion', ()=>{
        

        cy.visit('https://opensource-demo.orangehrmlive.com/auth/login')


        cy.url().should('eql','https://opensource-demo.orangehrmlive.com/auth/login')

        cy.url().should('contains','auth')

        cy.title().should('eql','OrangeHRM')

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        cy.get('.oxd-button').click()

        cy.get('.oxd-brand-banner > img').should('be.visible')

        cy.get('.oxd-brand-banner > img').should('exist')

        cy.get('.oxd-brand-banner > img').should('have.attr','src')

        cy.get('.oxd-brand-banner > img').should('have.attr','alt')

        cy.get('.oxd-brand-banner > img').should('have.length','1')

        cy.get('[class="oxd-main-menu-item-wrapper"]:nth-child(8)').find('[href="/dashboard/index"]').find('[height="22"]').should('be.visible')



    })

    it.only('Reading from Fixture',()=>{

        let dataval;
        cy.fixture('pageObject').then((mydata)=>{
cy.log(mydata.reg)
cy.log(mydata.regular)
          })
    })

})