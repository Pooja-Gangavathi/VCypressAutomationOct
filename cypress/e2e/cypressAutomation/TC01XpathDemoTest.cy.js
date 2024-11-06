describe('xpath Demo',()=>{
   it ('xpath Demo',()=>{
    
     cy.visit("https://tutorialsninja.com/demo/");
     cy.get('.list-inline > .dropdown > .dropdown-toggle').click();
     cy.get('.dropdown-menu > :nth-child(1) > a').click();


   })
})