import Appointmentpage from "../pageObjects/Appointmentpage";
import AppointmentSummarypage from "../pageObjects/AppointmentSummarypage";
import Basepage from "../pageObjects/Basepage";
import Historypage from "../pageObjects/Historypage";
import Homepage from "../pageObjects/Homepage";
import Loginpage from "../pageObjects/Loginpage";

describe("CuraHealthcareService spec", () => {
  context("Make an appointment", () => {
    beforeEach(() => {
      Basepage.visit();
    });

    it("testCase1", () =>{
      Homepage.createAppointment.click();
      Loginpage.username.type("John Doe");
      Loginpage.password.type("ThisIsNotAPassword");
      Loginpage.login.click();
      Appointmentpage.facilityMenu.select("Seoul CURA Healthcare Center");
      Appointmentpage.createReadmissionCheck.click();
      Appointmentpage.Radio.click();
      Appointmentpage.visitdates.click();
      Appointmentpage.date.contains("30").click();
      Appointmentpage.appointment.click("right");
      Appointmentpage.comment.type("CURA Healthcare Service");
      Appointmentpage.bookAppointment.click();
      AppointmentSummarypage.facility.should("have.text", "Seoul CURA Healthcare Center");
      AppointmentSummarypage.Readmission.should("have.text", "Yes");
      AppointmentSummarypage.healthcareProgram.should("have.text", "Medicaid");
      AppointmentSummarypage.visitDate.should("have.text", "30/05/2023");
      AppointmentSummarypage.comment.should("have.text", "CURA Healthcare Service");
    });

  });
  context("Appointment history empty", () => {
    beforeEach(() => {
      Basepage.visit();
    });

    it("testCase1", () =>{
      Homepage.createAppointment.click();
      Loginpage.username.type("John Doe");
      Loginpage.password.type("ThisIsNotAPassword");
      Loginpage.login.click();
      Basepage.menu.click();
      Basepage.sideBar.should("have.class", "active");
      Basepage.history.click()
      Historypage.history.should("have.text", "No appointment.")
    });
  });
});