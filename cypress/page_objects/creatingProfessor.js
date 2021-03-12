class Professor{
    get professorNavigation(){
        return cy.get("a[href='/gradebooks#'")
    }

    get createProfessor(){
        return cy.get("a[href='/create-professor'");
    }

    get firstName(){
        return cy.get("#firstName")
    }

    get lastName(){
        return cy.get("#lastName")
    }
    get addImagesButton(){
        return cy.contains("Add images")
    }
    get imageInput(){
        return cy.get(".form-control")
    }
    get submitButton(){
        return cy.get("button[type=submit]")
    }

    fillOutFields(firstName,lastName,imageInput){
        this.firstName.type(firstName);
        this.lastName.type(lastName);
        this.addImagesButton.click();
        this.imageInput.type(imageInput)
        this.submitButton.click();
    }

    clickCreateProfessor(){
        this.createProfessor.click();
    }

    clickProfessorNavigation(){
        this.professorNavigation.click();
    }
}

export const professor = new Professor();