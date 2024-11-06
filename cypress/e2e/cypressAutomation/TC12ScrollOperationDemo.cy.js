describe('Scroll operation Demo',function(){
    it('Scroll down',()=>{
        cy.visit('https://scroll.in/')
        cy.get('.alert-banner-content > .button').click()
        cy.get(':nth-child(5) > .row-stories > ul > :nth-child(2) > a > figure > img').scrollIntoView({duration:2000})
    })

    it('ScrollTO method Demo',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.scrollTo('bottom')
        cy.scrollTo('top')
    })
})