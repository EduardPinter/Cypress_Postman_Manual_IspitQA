/// <reference types="Cypress" />

import { login } from "../page_objects/loginPage"

const data = require("../fixtures/data.json")

describe("Logging into application", () => {

    it("Logging in with valid credentials", () => {
        cy.intercept("POST", "https://gradebook-api.vivifyideas.com/api/login", (req) => {
        }).as('succesfullLogin')
        cy.visit('/')
        login.emailField.should("have.attr", "required")
        login.passwordField.should("have.attr", "required")
        login.emailType(data.login.email)
        login.passwordType(data.login.password)
        login.submitClick();
        cy.url().should("eq", data.login.homePage)
        cy.wait("@succesfullLogin").then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
        })

    })


})