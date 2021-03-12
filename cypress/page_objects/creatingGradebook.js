class Gradebook{
    get createGradebookHref(){
        return cy.get("a[href='/create-gradebook'");
    }

    get title(){
        return cy.get("#title");
    }

    get selectField(){
        return cy.get("select[id='professor']")
    }

    get submitButton(){
        return cy.get(".btn")
    }

    submitButtonClick(){
        this.submitButton.click()
    }

    titleType(title){
        this.title.type(title)
    }

    selectFieldSelect(value){
        this.selectField.select(value)
    }

    createGradebookHrefClick(){
        this.createGradebookHref.click();
    }
}

export const gradebook = new Gradebook();