/// <reference types="Cypress" />

import { login } from "../page_objects/loginPage"
import { professor } from "../page_objects/creatingProfessor"

const data = require("../fixtures/data.json")

describe("Logging into application", () => {

    before(() => {
        cy.visit("/")
        login.emailType(data.login.email)
        login.passwordType(data.login.password)
        login.submitClick();
    })

    it("Creating a professor", () => {
        professor.clickProfessorNavigation();
        professor.clickCreateProfessor();
        professor.fillOutFields(data.createProfessor.firstName, data.createProfessor.lastName, data.createProfessor.imageUrl)
        cy.wait(1000)
        cy.url().should("eq", "https://gradebook.vivifyideas.com/all-professors")

    })

})