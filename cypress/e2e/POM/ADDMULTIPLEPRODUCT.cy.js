class addmultipleproduct
{
    ClickingHairCareTab()
    {
        return  cy.get("a[href*='product/category&path=']").contains('Hair Care').click({force:true})
    }
    ClikingDropdownToggle()
    {
        return cy.get('.dropdown-toggle > .fa').click({force:true})
    }
     columntoatlprice()
     {
        return cy.get(" tr td:nth-child(4)")

     }
     shippingbutton()
     {
        return cy.get(':nth-child(2) > :nth-child(2) > .bold')
     }
     assertintotal()
     {
        return cy.get('#totals_table > tbody > :nth-child(3) > :nth-child(1)')
     }
     calculateTotal()
     {
        return  
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
             
     }
     addingshippingcharage()
     {
        return
        cy.get(':nth-child(2) > :nth-child(2) > .bold').invoke('text').then((text) => {
            const priceText = text.replace('$', '');
             priceValue = Number(priceText);
            sum += priceValue;
            cy.log(sum)
          });
        
     
     }
     assrtingtotalvalue()
     {
       return
       cy.get('#totals_table > tbody > :nth-child(3) > :nth-child(1)').next().invoke('text').then((text) => {
        const priceText = text.replace('$', '');
         priceValue = Number(priceText);
         expect(priceValue).to.equal(sum)
    })
    
     }

}
export  default addmultipleproduct;
//import { constant } from "cypress/types/lodash"

