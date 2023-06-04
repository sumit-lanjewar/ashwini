describe("select",function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // Prevent Cypress from failing the test on uncaught exceptions
        return false;
      });
    it("with select tab",function(){

        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.get("#zcf_address_country").select("Japan")
        cy.get("#zcf_address_country").should("have.value","Japan")
        cy.get('#zcf_reported_by').type("sumit").should("have.value","sumit").and("have.length",5)
        
    })
    it.only("without select  tab dropdown",function(){

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Japan").type('{enter}')
        cy.get("#select2-billing_country-container").should("have.text","Japan")
    })
})