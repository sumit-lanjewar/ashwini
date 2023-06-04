/// <reference types="cypress" />

describe("Tesst datepicket", () => {
    it("select date from datepicker", () => {
        cy.visit("http://www.webdriveruniversity.com")
        cy.get('#datepicker').invoke('removeAttr', 'target').click({force:true})
        cy.get('#datepicker').click()
        cy.get('.datepicker-switch').first().click() // .eq(0)

       // function selectYear(){
           // cy.get('.datepicker-switch').first().then(yearText =>{
               // let yearName = yearText.text()
                // cy.log("Year is :" +yearName)
               // if(!yearName.includes('2030')){
                function selectYear(){
                cy.get('.datepicker-months > .table-condensed > thead > tr > .next').as('nextelement') 
                    cy.get('@nextelement').click({force:true})
                }
        
                function selectMonth() {
                    cy.get(".month").then(($element) => {
                      const text = $element.text();
                      if (text.includes("Feb")) {
                        cy.contains('Jan').click({force:true})
                      }
                    });
                  }
                  
                  
                   
            
        selectYear()
        selectMonth()   
                
    })
})    


    