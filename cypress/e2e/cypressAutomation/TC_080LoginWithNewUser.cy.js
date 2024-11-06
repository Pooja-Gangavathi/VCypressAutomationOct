describe('Login with New User using pageObject',function(){
    it('Login with same user',()=>{
       
        cy.fixture('pagObjectNinja1').then((mydata2)=>{
            cy.log(mydata2.email)
            cy.log(mydata2.password)
        })


        
    })
})//check