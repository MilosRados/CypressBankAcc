/// <reference types="cypress"/>

import { RegPage } from "./pages/reg_page"


const regPage = new RegPage()

it('BankAccount Test', () => {

cy.visit('https://parabank.parasoft.com/parabank/index.htm')

regPage.registerDataNameLname()
regPage.registerPlaceOfLiving()
regPage.registerPhoneSsn()
regPage.registerUserPassConf()


})