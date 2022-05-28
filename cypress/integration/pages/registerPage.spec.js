describe("Tests for the registerPage", () => {
  beforeEach(() => {
    cy.visit("/register");
  });
  it("Visit the page", () => {});
  it("Check inputs", () => {
    cy.get("[data-cypress=defaultInput]").should("have.length", 4);
  });
  it("Check login redirect", () => {
    cy.get("[data-cypress=loginLink]").click();
    cy.location("href").should("eq", "http://localhost:3000/login");
  });
});
