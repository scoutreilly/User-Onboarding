/* eslint-disable no-undef */
describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check for correct elements", () => {
    nameInput().should("exist");
    emailInput().should("exist");
    passInput().should("exist");
    termsCheckbox().should("exist");
  });

  it("submit disabled", () => {
    submitButton().should("be.disabled");
  });

  it("test name input", () => {
    nameInput()
      .should("have.value", "")
      .type("hi im a name")
      .should("have.value", "hi im a name");
  });

  it("test email input", () => {
    emailInput()
      .should("have.value", "")
      .type("test@test.com")
      .should("have.value", "test@test.com");
  });

  it("test pass input", () => {
    passInput()
      .should("have.value", "")
      .type("super secret password")
      .should("have.value", "super secret password");
  });

  it("test checkbox functionality", () => {
    termsCheckbox().should("not.checked").check().should("be.checked");
  });

  it("can submit new user data", () => {
    nameInput().type("name");
    emailInput().type("test@test.com");
    passInput().type("password");
    termsCheckbox().check();
    submitButton().click();
  });

  it("check name validation", () => {
    nameInput().type("my name").clear();
    cy.get("#name p");
    submitButton().should("be.disabled");
  });

  it("check email validation", () => {
    emailInput().type("test.com");
    cy.get("#email p");
    submitButton().should("be.disabled");
  });

  it("check password validation", () => {
    nameInput().type("secure password").clear();
    cy.get("#password p");
    submitButton().should("be.disabled");
  });

  it("check terms validation", () => {
    termsCheckbox().check().uncheck();
    cy.get("#checkbox p");
    submitButton().should("be.disabled");
  });
});

// setting consts
const nameInput = () => cy.get("[name=username]");
const emailInput = () => cy.get("[name=email]");
const passInput = () => cy.get("[name=password]");
const termsCheckbox = () => cy.get("[name=terms]");
const submitButton = () => cy.get("button");
