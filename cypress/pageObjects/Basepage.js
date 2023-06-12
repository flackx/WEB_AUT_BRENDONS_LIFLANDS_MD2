class BasePage {

    static get url(){
        return"";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get menu(){
        return cy.get("#menu-toggle");
    }

    static get sideBar(){
        return cy.get("#sidebar-wrapper");
    }

    static get history(){
        return cy.contains("a", "History");
    }
}

export default BasePage;