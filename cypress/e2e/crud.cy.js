/// <reference types='cypress'/>

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe('basic crud oprations on B&B', ()=>{ // insted of ()=> we can also write function()

    it('creating and deleting rooms with different assertions',()=>{

        cy.visit('https://automationintesting.online/#/admin')

        cy.get('.col-2 > .btn').click() // let me hack button

        cy.get('[data-testid="username"]')
            .should('be.empty')
            .type('admin') // typing username

        cy.get('[data-testid="password"]')
            .should('be.empty')
            .type('password') // typing password

        cy.get('[data-testid="submit"]')
            .should('not.be.disabled')
            .click()

        cy.get('[data-testid="roomName"]').type('202')
        cy.get('#type')
            .select('Twin')
            .should('have.value', 'Twin')
        cy.get('#accessible')
            .select('true')
            .should('have.value', 'true')
        
        cy.get('#roomPrice')
            .should('be.empty')
            .type('200')
        
        cy.get('#wifiCheckbox')
            .check()
            .should('be.checked')
        
        cy.get('#tvCheckbox')
            .check()
            .should('be.checked')
        
        cy.get('#safeCheckbox')
            .check()
            .should('be.checked')

        cy.get('#viewsCheckbox')
            .check()
            .should('be.checked')

        cy.get('#createRoom').should('not.be.disabled').click()

        cy.get('#roomName202').click({force : true})

        cy.wait(1000)

        // type of room validations

        cy.get('.col-sm-6 p span').eq(0)
        .then((roomType)=>{
            let rt = roomType.text()
            expect(rt).to.be.equal('Twin') // Bdd assertions 
            assert.equal(rt, 'Twin', 'values are equal') // tdd assertions
        })

        cy.get('.col-sm-6 p span').eq(1)
        .then((roomDesc)=>{
            let rd = roomDesc.text()
            expect(rd).to.be.equal('Please enter a description for this room')
        })

        cy.get('.col-sm-6 p span').eq(2)
        .then((roomAcc)=>{
            let ra = roomAcc.text()
            expect(ra).to.be.equal('true')
        })

        cy.get('.col-sm-6 p span').eq(3)
        .then((roomFea)=>{
            let rf = roomFea.text()
            expect(rf).to.be.equal('WiFi, TV, Safe, Views')
        })

        cy.get('.col-sm-6 p span').eq(4)
        .then((roomPrice)=>{
            let rp = roomPrice.text()
            expect(rp).to.be.equal('200')
        })

        // cy.contains('Rooms').click()


        // cy.get('')
    })

})