class Login {

    get emailField(){
        return cy.get("input[type=text]");
    }
    get passwordField(){
        return cy.get("input[type=password]");
    }

    get submitButton(){
        return cy.get("button[type=submit]");
    }

    submitClick(){
        this.submitButton.click();
    }

    emailType(email){
        this.emailField.type(email);
    }

    passwordType(password){
        this.passwordField.type(password);
    }
}

export const login = new Login();