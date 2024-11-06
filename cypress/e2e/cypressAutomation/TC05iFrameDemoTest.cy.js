describe('Iframe Demo', ()=>{

    it.skip('Iframe Demo', ()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.frameLoaded('#frame-one796456169');

        cy.iframe().find('[type="radio"]').should('be.visible').check();

    })

    it.skip('Iframe Demo Using Internet App', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')
        
        cy.frameLoaded('#mce_0_ifr');

        cy.iframe('#mce_0_ifr').should('be.visible');
        
    })

    it('W3 School Demo', ()=>{

        cy.visit('https://www.w3schools.com/html/html_iframe.asp')

        cy.get('#accept-choices').click()
        
        cy.frameLoaded('[title="W3Schools HTML Tutorial"]');

        cy.wait(2000)

        cy.contains('CSS').click();
    })
})