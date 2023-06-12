import BasePage from "./Basepage";

class AppointmentPage extends BasePage{
    static get url(){
        return "/#appointment";
    }

    static get facilityMenu(){
        return cy.get("#combo_facility");
    }

    static get createReadmissionCheck(){
        return cy.get("#chk_hospotal_readmission");
    }

    static get Radio(){
        return cy.get("#radio_program_medicaid");
    }

    static get visitdates(){
        return cy.get("#txt_visit_date");
    }
    static get date(){
        return cy.get(".day");
    }

    static get comment(){
        return cy.get("#txt_comment");
    }

    static get appointment(){
        return cy.get("#appointment");
    }

    static get bookAppointment(){
        return cy.get("#btn-book-appointment");
    }
}

export default AppointmentPage;