describe("Tests for the loginpage", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  it("Visit the page", () => {});
  it("Check registerbutton redirect", () => {
    cy.get("[data-cypress=defaultButton]").contains("Register").click();
    cy.location("href").should("eq", "http://localhost:3000/register");
  });
});
