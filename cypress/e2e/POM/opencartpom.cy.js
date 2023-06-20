class opencart
{
    username()
    {
        return    cy.get('[name="username"]').type("demo")
    }
    password()
    {
        return  cy.get('[name="password"]').type("demo")

    }
    submit()
    {
        return   cy.get('.btn').click()
    }
    popup()
    {
        return  cy.get('.btn-close').click()
    }
    parentcustomer()
    {
        return     cy.get('#menu-customer > .parent').click()
    }
    childcustomer()
    {
        return cy.get("#menu-customer >ul> li:nth-child(1)").click()
    }
}


export default opencart