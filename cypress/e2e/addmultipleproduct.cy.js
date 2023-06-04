///<reference types='cypress'/>
import addmultipleproduct from "../e2e/POM/ADDMULTIPLEPRODUCT.cy.js";
describe("Add multile items to basket",()=>{

    let data;
    let priceValue;
  const  aml= new addmultipleproduct();
    before(function(){
        cy.fixture("product").then(function(reqData){

            data=reqData;
        })
    })
    beforeEach(function(){
       
        
         cy.visit('https://automationteststore.com/')
          
        // aml.ClickingHairCareTab()
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click({force:true})
    
    })

    it("Add specific items to cart",()=>{

        data.mulProductName.forEach(function(element){

            cy.addMProductToBasket(element)


        })
        cy.get('.dropdown-toggle > .fa').click({force:true})
       //aml.ClikingDropdownToggle()
       cy.get('#cart_checkout1').click({force:true})//const priceWithoutDollarSign = priceWithDollarSign.replace("$", "");
        let totalelement=[]
let sum=0;
cy.get(" tr td:nth-child(4)").each((ele,index)=>{
         totalelement[index]=ele.text().replace("$", "")//totalelement=[31,4,11.6]
}).then(()=>{
     for(let j=0;j<totalelement.length;j++)
     { 
          if(Number(totalelement[j]))
          {
               sum+=(Number(totalelement[j]))
          }
     }
     
     })
     //let sum = 0;
    // aml.calculateTotal()
     //aml.addingshippingcharage()

cy.get(':nth-child(2) > :nth-child(2) > .bold').invoke('text').then((text) => {
  const priceText = text.replace('$', '');
   priceValue = Number(priceText);
  sum += priceValue;
  cy.log(sum)
});
//aml.assrtingtotalvalue()
cy.get('#totals_table > tbody > :nth-child(3) > :nth-child(1)').next().invoke('text').then((text) => {
    const priceText = text.replace('$', '');
     priceValue = Number(priceText);
     expect(priceValue).to.equal(sum)
})

    })

})






    
