describe('Guest checkout',function(){
    it('Guest checkout',()=>{
        cy.visit('https://tutorialsninja.com/demo/')
        //cy.get('.list-inline > .dropdown > .dropdown-toggle').click()
        cy.get('.caret').click()
    
        cy.get('.dropdown-menu > :nth-child(1) > a').click()
    
        cy.get('#input-firstname').type('Pooja')
    
        cy.get('#input-lastname').type('shamanth')
    
        cy.get('#input-email').type('qwerty@123.com')
    
        cy.get('#input-telephone').type('9012345678')
    
        cy.get('#input-password').type('qwerty@123')
    
        cy.get('#input-confirm').type('qwerty@123')
    
        cy.get('[type="checkbox"]').click()
    
        cy.get('.pull-right > .btn').click()
    
        cy.get('.pull-right > .btn').click()

        cy.get('.nav > :nth-child(2) > .dropdown-toggle').click()

        cy.get('.open > .dropdown-menu > .see-all').click()
        //cy.get(`[onclick="cart.add('47', '1');"]`).click()
        cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click()
        cy.get('#button-cart').click()
        cy.get('#cart-total').click()
        cy.get('[href="https://tutorialsninja.com/demo/index.php?route=checkout/checkout"] > strong').click()
        cy.get(':nth-child(4) > label > input').click()
        cy.get('#button-account').click()
        //Billing details page 
        cy.get('#input-payment-firstname').type('Pooja')
        cy.get('#input-payment-lastname').type('shamanth')
        cy.get('#input-payment-email').type('qwerty@123.com')
        cy.get('#input-payment-telephone').type('9012345678')
        cy.get('#input-payment-company').type('SITA')
        cy.get('#input-payment-address-1').type('Silvertigen 10')
        cy.get('#input-payment-address-2').type('sodertalje')
        cy.get('#input-payment-city').type('stockholm')
        cy.get('#input-payment-postcode').type('23456')
        cy.get('#input-payment-country').select('Sweden')
        cy.get('#input-payment-zone').select('Stockholm')
        cy.get('#button-guest').click()
        cy.get('.panel-body > :nth-child(5) > .form-control').type('confirmed')
        cy.get('#button-shipping-method').click()
        cy.get('.pull-right > [type="checkbox"]').click()
        cy.get('#button-payment-method').click()
        cy.get('#button-confirm').click()



        
    })
})