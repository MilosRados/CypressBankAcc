/// <reference types="cypress"/>

import { RegPage } from "./pages/reg_page"
import { LoginPage } from "./pages/login_page"


const regPage = new RegPage()
const logInPage = new LoginPage()

describe('Testing Bank Account', () =>{

it('BankAccount Test', () => {

cy.visit('https://parabank.parasoft.com/parabank/index.htm')

regPage.registerDataNameLname()
regPage.registerPlaceOfLiving()
regPage.registerPhoneSsn()
regPage.registerUserPassConf()


})

it('Customer Login', () => {

    logInPage.enterUserPassSub()




})


})