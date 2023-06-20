///<reference types="cypress"/>

describe("My Test suit",()=>{

    it('Data Driven Test',()=>{

        cy.fixture('logincredentials.json').then((data)=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

            data.forEach((userdata)=>{

                cy.get('input[placeholder="Username"]').type(userdata.username)
                cy.get('input[placeholder="Password"]').type(userdata.password)
                cy.get('button[type="submit"]').click()

                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                    cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click() //click on PIM
    
                    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('have.text',userdata.expected) //PIM validation

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click() //logout

                    cy.wait(5000)

                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click()   //logout
        
                }
                else
                {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text',userdata.expected)
                }
        


            })
        })


    })
})