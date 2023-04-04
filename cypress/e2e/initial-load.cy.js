// visit the localhost:3000 server and load the home page
describe("Home page", () => {
  it("successfully loads", () => {
    cy.visit("http://localhost:3000");
  });
});
