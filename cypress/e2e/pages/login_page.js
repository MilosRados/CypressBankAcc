export class LoginPage{


enterUserPassSub(){

        cy.visit('https://parabank.parasoft.com/parabank/index.htm')

cy.get('input[name="username"]').type('MickoRourke').should('have.value','MickoRourke')

cy.get('input[name="password"]').type('$ifra14').should('have.value','$ifra14')

cy.get('input[value="Log In"]').click().should('be.enabled')

cy.url().should('eq','https://parabank.parasoft.com/parabank/overview.htm')

cy.contains('Accounts Overview').should('be.visible')


}


}