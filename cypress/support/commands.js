// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
 Cypress.Commands.add('login', (email, password) => {
  cy.get('#userEmail').type(email)
  cy.get('#userPassword').type(password)
  cy.get('#login').click()
  })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('addition', (sum1, sum2) => {
    let sum=sum1+sum2
    return cy.log(sum)
 })

 Cypress.Commands.add('selectproduct',(productname)=>{
 cy.get("h4.product-name").each((ele,index,list)=>{
  //  cy.wait(4000)
        let producttoselct=ele.text()
         if(producttoselct.includes(productname))
         {
              cy.get("button[type='button']").eq(index+1).click()
             
         }
     
      
     })
    })
    Cypress.Commands.add("parseXlsx",(inputfile)=>{
        return cy.task("parseXlsx",{filepath:inputfile})
        
        });
   
 Cypress.Commands.add("addMProductToBasket", mulProductName => {

  cy.get("[class='prdocutname']").each((el,index)=>{

      if(el.text() === mulProductName){
          cy.log(el.text())
          cy.get('.thumbnail > .pricetag > .productcart > .fa').eq(index).click({force:true})

      }
  })


})
  
  
  
      
      
      


 