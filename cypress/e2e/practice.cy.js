///<reference types="cypress"/>
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
        cy.selectproduct("Carrot")
        cy.selectproduct("Cauliflower")
         cy.selectproduct("Corn")
    })
})

// describe("bh",function(){
//     let temp
//     beforeEach(() => {
//         cy.visit("https://automationteststore.com/")
//         cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').contains("Hair Care").click()
//       });

//     it("hv",function(){

//        // cy.visit("https://automationteststore.com/")
//       //  cy.get('[href="https://automationteststore.com/index.php?rt=product/category&path=52"]').contains("Hair Care").click()
//        cy.get(".fixed_wrapper .prdocutname").each((elem,index)=>{
//          temp= elem.text().trim()
//     //    if(temp =="Seaweed Conditioner")
//     //    {
//     //     cy.wrap(elem).click()
//     //    }

//     //    })
//     cy.log("index" + index +": " + temp)
       
   
   
//     })
    
// })
// it("clicking particular product from item",function(){
    
//     cy.get(".fixed_wrapper .prdocutname").each((elem)=>{
//         if(elem.text().includes("Pantene Pro-V Conditioner, Classic Care"))
//         {
//             cy.wrap(elem).should("include.text", " Classic Care").click()
         
//         }

//     })
// })
// })