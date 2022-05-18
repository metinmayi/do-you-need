describe("Tests for the landingpage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Visit the page", () => {});
  it("Check loginbutton redirect", () => {
    cy.get("[data-cypress=defaultButton]").contains("Login").click();
    cy.location("href").should("eq", "http://localhost:3000/login");
  });
  it("Check registerbutton redirect", () => {
    cy.get("[data-cypress=defaultButton]").contains("Register").click();
    cy.location("href").should("eq", "http://localhost:3000/register");
  });
});
