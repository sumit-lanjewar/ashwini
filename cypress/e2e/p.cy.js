/// <reference types="Cypress" />
describe("hi",function(){
    it("hi",function(){

        cy.visit("http://www.webdriveruniversity.com")

        cy.get('#iframe').invoke('removeAttr', 'target').click({force:true})
        cy.get('#frame').then(ifrmae => {
            const body= ifrmae.contents().find('body')
            cy.wrap(body).as('iframe')
        })
        cy.get('@iframe').find('#button-find-out-more').click()
        cy.get('@iframe').find('.modal-body > p')
        .should('include.text', 'Welcome to webdriveruniversity.com we sell a wide range of electrical goods such as laptops, game consoles')

         cy.get('@iframe').find('.close').click({force:true})
        // describe('Finding the least price item', () => {
        //     it('should find the item with the least price', () => {
        //       cy.visit('https://www.example-ecommerce-site.com')
        //       cy.get('.product-grid').find('.product-item').each(($el, index, $list) => {
        //         const price = $el.find('.price').invoke('text').then(parseFloat)
        //         cy.wrap(price).then((parsedPrice) => {
        //           if (parsedPrice < leastPrice || leastPrice === null) {
        //             leastPrice = parsedPrice
        //             leastPriceProduct = $el
        //           }
        //         }) 
        //       }).then(() => {
        //         cy.wrap(leastPriceProduct).find('button').click()
        //         cy.get('.cart').should('contain', 'Added to cart')
        //       })
          //     const longEmail = 'a'.repeat(25) + '@example.com'
          //     cy.log(longEmail)
          //     cy.addition(2,3)
          //     cy.login()
              
          //   })
          // })
        
        
            })
          })
        
      
        
  