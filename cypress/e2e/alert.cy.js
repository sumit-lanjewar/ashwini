describe("alert",function(){
    
    it("js prompt alert",()=>{

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
       
        cy.window().then((win)=>{
           cy.stub(win,'prompt').returns('sumit');
            

        })
       


      
        cy.get('button[onclick="jsPrompt()"]').click()  
        //cypress will automatically closed the prompt alert by click on 'OK' button

        cy.get('#result').should('have.text','You entered: sumit')
})
})