describe("Tests for the landingpage", () => {
  it("Visit the page", () => {
    cy.visit("/");
  });
  it("Check for buttons", () => {
    cy.visit("/");
    cy.get("a").should(($a) => {
      expect($a).to.have.length(2);
    });
  });
});
