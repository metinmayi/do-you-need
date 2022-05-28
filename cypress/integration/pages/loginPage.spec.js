describe("Tests for the loginpage", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Visit the page", () => {});
  it("Check registerbutton redirect", () => {
    cy.get("[data-cypress=defaultButton]").contains("Register").click();
    cy.location("href").should("eq", "http://localhost:3000/register");
  });
  it("Check recovery button redirect", () => {
    cy.get("[data-cypress=recoveryLink]").click();
    cy.location("href").should("eq", "http://localhost:3000/recover");
  });
});
