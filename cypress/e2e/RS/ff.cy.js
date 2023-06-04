describe('My Second Test Suite', function() {
    it("jj",function(){
        cy.addition(1,2)
        cy.fixture('example.json').then((fileData) => {
            let username = fileData.username;
            cy.log(username);
          });
          
    })
})