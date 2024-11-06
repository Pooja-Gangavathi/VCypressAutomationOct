describe('Navigation Command',()=>{
    it('Navigation Command',()=>{
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get(':nth-child(2) > .product-thumb > .image > a > .img-responsive').click()
        cy.url().should('contains','tutorialsninja','be.visible')
        cy.go('back')
        cy.go('forward')
        cy.url().should('contain','product_id=40')
        cy.get('#button-cart').click()
        cy.go(-1)
        cy.go(1)
        cy.reload()
    })
})