// cypress/integration/CircularProgressBar.spec.js
describe("CircularProgressBar component", () => {
  beforeEach(() => {
    cy.visit("/"); // Update the path to your CircularProgressBar component
  });

  it("renders CircularProgressBar with default props", () => {
    cy.get("svg")
      .should("be.visible")
      .and("have.attr", "viewBox", "0 0 100 100");

    cy.get('[aria-label="background"]')
      .should("have.attr", "stroke", "blue")
      .and("have.attr", "stroke-width", "5px");

    cy.get('[aria-label="progress"]')
      .should("have.attr", "stroke", "#d3e1ff")
      .and("have.attr", "stroke-width", "5.9px");

    cy.contains("25").should("be.visible");
  });

  it("renders CircularProgressBar with custom props", () => {
    // Update your component to accept custom props through a query string or other means
    cy.visit("/?sqSize=120&percentage=50&strokeWidth=8");

    cy.get("svg")
      .should("be.visible")
      .and("have.attr", "viewBox", "0 0 120 120");

    cy.get('[aria-label="background"]')
      .should("have.attr", "stroke", "blue")
      .and("have.attr", "stroke-width", "8px");

    cy.get('[aria-label="progress"]')
      .should("have.attr", "stroke", "#d3e1ff")
      .and("have.attr", "stroke-width", "8.9px");

    cy.contains("50").should("be.visible");
  });
});
