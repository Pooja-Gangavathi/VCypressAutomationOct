describe('Mouse Operation Test',function(){

    it('Mouse operation',()=>{

        cy.visit('https://demo.opencart.com/')
        cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('not.be.visible')
        cy.get(':nth-child(2) > .dropdown-toggle').trigger('mouseover').click()
        cy.get(':nth-child(2) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').should('be.visible')


    })

    it('Right click',()=>{
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html')
        //cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-one').trigger('contextmenu')
    })

    it('Double click',()=>{

    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick')
    cy.get('#accept-choices').click()
   cy.frameLoaded('#iframeResult')
   cy.iframe('#iframeResult').find('[ondblclick="myFunction()"]').dblclick()

    })

    it.only('Drag and Drop',()=>{
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html#google_vignette')
        cy.get('#box1').should('be.visible')
        cy.get('#box3').should('be.visible')
        cy.get('#box1').drag('#box101',{force:true})

        cy.wait(2000)

        cy.get('#box2').drag('#box102',{force:true})

    })
})