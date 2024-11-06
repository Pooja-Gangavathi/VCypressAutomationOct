describe('Alert Demo',()=>{

    it('Alert Demo Test',()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get(':nth-child(1) > button')
        
    })
})