import BasePage from "./Basepage";

class HistoryPage extends BasePage{
    static get url(){
        return "/history.php#history";
    }

    static get history(){
        return cy.get(".col-sm-12").find("p");
    }
}

export default HistoryPage;