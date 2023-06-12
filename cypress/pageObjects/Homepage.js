import BasePage from "./Basepage";

class HomePage extends BasePage{
    static get url(){
        return "/";
    }

    static get createAppointment(){
        return cy.get("#btn-make-appointment");
    }
}

export default HomePage;