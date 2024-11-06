describe('Before and After Demo',()=>{

    before(()=>{
        cy.log('BEFORE')
    })
    beforeEach(()=>{
        cy.log('Before eavh Testcase')
    })

    it('Actual Test case 1',()=>{
        cy.log('Test case number 1')
    })
    it('Actual Test case 2',()=>{
        cy.log('Test case number 2')
    })

    after(()=>{
        cy.log('AFTER')
    })
    afterEach(()=>{
        cy.log('After each Test case')
    })
})