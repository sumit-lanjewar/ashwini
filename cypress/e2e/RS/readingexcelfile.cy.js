
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
 



describe("adding item and asserting excel assertion",function(){
  let data
  before(function () {
    cy.fixture("example").then((reqData) => {
      data = reqData
    });
  });
  
    it("asserting excel value ",function(){
      
        cy.visit("https://rahulshettyacademy.com/client/")
        
       
        // cy.get('#userEmail').type("sumit.lanjewar123456@gmail.com")
        // cy.get('#userPassword').type("sumitL@0")
        // cy.get('#login').click()
       
         // raeding unmae and password from fixture folder
          // cy.fixture("example.json") .then((data)=>{

          //   un =data.username;
          //   ps=data.password;

           
          // }) 
        let  un =data.username;
         let   ps=data.password;
         
          cy.login(un,ps)
          
          // cy.wrap().then(() => {
          //   cy.log(un)
          //   cy.log(ps)
          //   cy.login(un,ps)
          // });
         
        

        cy.get(':nth-child(1) > .card > .card-body > .w-10').click({force:true})
        cy.get(':nth-child(2) > .card > .card-body > .w-10').click({force:true})
        cy.get(':nth-child(4) > .btn').click({force:true})
        cy.get('.subtotal > ul > :nth-child(3) > .btn').click()
        cy.get('.form-group > .input').type("India")
        cy.get(".fa.fa-search").each((el,index)=>{
            let temp=el.text()
            if(temp=="India")
            {
                cy.wrap(el).click()
            }
            
        })
        cy.get(':nth-child(3) > .ng-star-inserted').click({force:true})
        
        cy.get('.btnn').click({force:true})

       cy.get(".btn.btn-primary.mt-3.mb-3").last().click()

cy.parseXlsx("cypress/downloads/order-invoice_sumit.lanjewar123456.xlsx").then(jsonData=>{
  const rowlength= Cypress.$(jsonData[0].data).length
cy.log(rowlength)
const information = Cypress.$(jsonData[0].data)
cy.log(information)
let value=jsonData[0].data[0]
cy.log(value[0])
cy.log(value[1])
})
     
      })
    })
  
