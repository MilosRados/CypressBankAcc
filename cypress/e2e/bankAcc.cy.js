/// <reference types="cypress"/>

import { RegPage } from "./pages/reg_page"


const regPage = new RegPage()

it('BankAccount Test', () => {

cy.visit('https://parabank.parasoft.com/parabank/index.htm')

regPage.registerDataNameLname()
regPage.registerPlaceOfLiving()
regPage.registerPhoneSsn()
regPage.registerUserPassConf()

// cy.contains('Register').click()

// cy.get('input[id="customer.firstName"]').type('Micko').should('have.value',"Micko")

// cy.get('input[id="customer.lastName"]').type('Rourke').should('have.value','Rourke')

// cy.get('input[id="customer.address.street"]').type('My street 9').should('have.value','My street 9')

// cy.get('input[id="customer.address.city"]').type('Barcelona').should('have.value','Barcelona')

// cy.get('input[id="customer.address.state"]').type('Spain').should('have.value','Spain')

// cy.get('input[id="customer.address.zipCode"]').type('80001').should('have.value','80001')

// cy.get('input[id="customer.phoneNumber"]').type('+12345678').should('have.value','+12345678')

// cy.get('input[id="customer.ssn"]').type('252525').should('have.value','252525')

// cy.get('input[id="customer.username"]').type('MickoRourke').should('have.value','MickoRourke')

// cy.get('input[id="customer.password"]').type('$ifra14').should('have.value','$ifra14')

// cy.get('#repeatedPassword').type('$ifra14').should('have.value','$ifra14')

// cy.get('input[value="Register"]').click().should('be.enabled').and('be.visible')
})