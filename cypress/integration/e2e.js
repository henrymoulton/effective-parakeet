describe("App", () => {
  it("can click an upcoming event and navigate to the Smarkets website", () => {
    cy.visit("http://localhost:19006/");
    // TODO: get interacting with <select> working https://github.com/cypress-io/cypress/issues/7306
    // cy.get("[data-testid=selectEventType]").select("Basketball Match", {
    //   timeout: 1000,
    // });

    cy.contains("Start Time").click();
    cy.url().should("include", "smarkets");
  });
});
