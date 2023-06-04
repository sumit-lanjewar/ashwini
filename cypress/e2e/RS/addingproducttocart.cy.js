/// <reference types="Cypress" />
cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
    })
    
 
describe('My Second Test Suite', function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
        })
   
    it("calculating total quantity",function(){
         cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('.search-keyword').type("c")
        cy.wait(2000)
        cy.selectproduct("carrot")
        cy.selectproduct("Cauliflower")
         cy.selectproduct("Corn")
    })
})