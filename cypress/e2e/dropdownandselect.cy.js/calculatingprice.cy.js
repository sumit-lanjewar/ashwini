describe("calculating price of  item",function(){

    it("calculating price of sale item",function(){
        cy.visit("https://automationteststore.com/")
        //cy.get(".thumbnail").invoke(text())
        cy.get(".thumbnail").find(".pricenew").each((ele,index)=>{
            cy.log(ele.text())
        })
        cy.get(".thumbnail").find(".oneprice").each((ele,index)=>{
            cy.log(ele.text())
        })
        
    })
})