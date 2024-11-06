describe('View port Command',()=>{

    beforeEach(()=>{
        cy.viewport('iphone-xr')
    })
    it('View port cammand - GOIBIOBO',()=>{
        cy.visit('https://www.goibibo.com/')
    })

    it('View Port Command - EASEMYTRIP', ()=>{

        cy.visit('https://demo3x.opencartreports.com/admin/')
        cy.wait(5000)
})
})