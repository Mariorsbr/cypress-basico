/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o titulo da aplicacao', () => {
    // cy.visit('./src/index.html')
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  it('preenche os campos obrigatórios e envia o formulário', () => {
    // cy.visit('./src/index.html')
    cy.get('[id="firstName"]')
      .should('be.visible')
      .type('nome')
      .should('have.value', 'nome')

    cy.get('[id = "lastName"]')
      .should('be.visible')
      .type('sobrenome')
      .should('have.value', 'sobrenome')

    cy.get('[id = "email"]')
      .should('be.visible')
      .type('teste@teste.com')
      .should('have.value', 'teste@teste.com')

    cy.get('[id = "open-text-area"]')
      .should('be.visible')
      .type('campo obrigatorio')
      .should('have.value', 'campo obrigatorio')

    cy.get('[class = "success"]')
      .should('not.be.visible')

    cy.get('[class="button"]')
      .should('have.text', 'Enviar')
      .click()

    cy.get('[class = "success"]')
      .should('be.visible')
  })



})
