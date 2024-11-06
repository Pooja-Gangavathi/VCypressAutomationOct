describe('File Upload Test',()=>{
    it('File Upload Test',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
       cy.get('#file-upload').attachFile('example.json')
       cy.get('#file-submit').click()
    })

    it('Cypress File Upload - RENAME',()=>{

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'example.json',filename:'Demo.json'})
        cy.get('#file-submit').click();
        
    })

    it('File upload - Drag and Drop',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Demoimage',{subjectType:'drag-n-drop'})
        cy.get('#file-submit').click();
    })

    it.only('Drage and Drop of docx,png,pdf files',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('Demoimage','example.pdf','what-is-a-to-do-list.png',{subjectType:'drag-n-drop'})
        cy.get('#file-submit').click();
    })

})