describe("Hero Component", () => {
  it("renders the Hero section and allows interaction", () => {
    cy.visit("/"); // Visit the homepage

    // Verify the heading
    cy.get("h1").contains("Nike Air Max Pulse");

    // Verify and click "Notify Me" button
    cy.get("button").contains("Notify Me").click();

    // Verify and click "Shop Air Max" button
    cy.get("button").contains("Shop Air Max").click();
  });
});
