describe('Login with same User using pageObject',function(){
    it('Login with same user',()=>{
       
        cy.fixture('pagObjectNinja').then((mydata1)=>{
            cy.log(mydata1.email)
            cy.log(mydata1.password)
        })


        
    })
})