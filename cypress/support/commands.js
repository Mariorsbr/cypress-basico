Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
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
    .type('Portanto, experimente digitar um texto longo na área de texto, passando como segundo argumento do comando', { delay: 0 })
    .should('have.value', 'Portanto, experimente digitar um texto longo na área de texto, passando como segundo argumento do comando')

  cy.get('[class="button"]')
    .should('have.text', 'Enviar')
    .click()


})
