/// <reference types="cypress" />

describe("Profile", () => {
  it("should visit profile page", () => {
    cy.visit("/");
    cy.contains("User Profile").click();
    cy.url().should("contain", "/admin/user");
  });

  it("should contain User Profile title", () => {
    cy.get("[data-testid='title']").should("contain", "User Profile");
  });

  it("should find github profile", () => {
    cy.get("[data-testid='github-profile-input']").type("cintiafumi");
    cy.contains("Get from GitHub").click();
  });

  it("should fill profile form", () => {
    cy.visit("/admin/user");

    cy.get(".dropdown.show").click();
    cy.get("[data-testid='username-input']").type("cintiafumi");
    cy.get("[data-testid='jobtitle-input']").type("Front-end Developer");
    cy.get("[data-testid='fullname-input']").type("Cintia Yamamoto");
    cy.get("[data-testid='description-input']").type("Task killer");

    cy.get("[data-testid='submit-button']").click();

    cy.get("h4").should("contain", "Cintia Yamamoto");
    cy.get("h4").should("contain", "@cintiafumi");
  });
});
