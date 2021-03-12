/// <reference types="Cypress" />

import { login } from "../page_objects/loginPage"
import { professor } from "../page_objects/creatingProfessor"
import { gradebook } from "../page_objects/creatingGradebook"

const data = require("../fixtures/data.json")

describe("Logging into application", () => {

    before(() => {
        cy.visit("/")
        login.emailType(data.login.email)
        login.passwordType(data.login.password)
        login.submitClick();
    })

    it("Creating gradebook", () => {
        gradebook.createGradebookHrefClick();
        cy.url().should("eq", "https://gradebook.vivifyideas.com/create-gradebook")
        gradebook.titleType(data.gradebook.title)
        gradebook.selectFieldSelect("Edi1234 Pinter333")
        gradebook.submitButtonClick()
        cy.url().should("eq", "https://gradebook.vivifyideas.com/gradebooks")


    })

})