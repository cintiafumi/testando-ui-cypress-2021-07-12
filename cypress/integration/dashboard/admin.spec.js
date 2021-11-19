/// <reference types="cypress" />

describe("Dashboard", () => {
  it("should visit home page", () => {
    cy.visit("/");
    cy.url().should("contain", "/admin/dashboard");
  });

  it("should contain Dashboard title", () => {
    cy.get("[data-testid='title']").should("contain", "Dashboard");
  });

  it("should set sidebar color to purple", () => {
    cy.get("[data-color='purple']").click();
    cy.get("[data-testid='sidebar-background']")
      .first()
      .should("have.css", "background-color", "rgb(156, 39, 176)");

    cy.get("[data-color='red']").click();
    cy.get("[data-testid='sidebar-background']")
      .first()
      .should("have.css", "background-color", "rgb(244, 67, 54)");
  });
});
