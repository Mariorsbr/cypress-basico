/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  // (lesson 01)
  it('verifica o titulo da aplicacao', () => {
    cy.title()
      .should('eq', 'Central de Atendimento ao Cliente TAT')
  })

  // (lesson 02 - extra 1)
  it('preenche os campos obrigatórios e envia o formulário', () => {
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

    cy.get('[class = "success"]')
      .should('not.be.visible')

    cy.get('[class="button"]')
      .should('have.text', 'Enviar')
      .click()

    cy.get('[class = "success"]')
      .should('be.visible')
  })

  // (lesson 02 - extra 2)
  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
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
      .type('teste2teste.com')
      .should('have.value', 'teste2teste.com')

    cy.get('[id = "open-text-area"]')
      .should('be.visible')
      .type('Campo texto', { delay: 0 })
      .should('have.value', 'Campo texto')

    cy.get('[class="button"]')
      .should('have.text', 'Enviar')
      .click()

    cy.get('.error')
      .should('be.visible')

  })

  // (lesson 02 - extra 3)
  it('o campo telefone so aceita numeros', () => {
    cy.get('#phone')
      .type('qwertyuiop-asdfghjklç-zxcvbnm.')
      .should('not.have.value')
  })

  // (lesson 02 - extra 4)
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.get('#phone-checkbox')
      .should('be.visible')
      .click()
    cy.get('.phone-label-span')
      .should('be.visible')

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
      .type('Campo texto', { delay: 0 })
      .should('have.value', 'Campo texto')

    cy.get('[class="button"]')
      .should('have.text', 'Enviar')
      .click()

    cy.get('.error')
      .should('be.visible')

  })

  // (lesson 02 - extra 5)
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {

  })

  // (lesosn 02 - extra 6)
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.get('[class = "button"]')
      .should('have.text', 'Enviar')
      .click()

    cy.get('.error')
      .should('be.visible')
  })

  // (lesson 02 - extra 7)
  it('envia o formuário com sucesso usando um comando customizado', () => {

  })

  // (lesson 02 - extra 8)
  it('identificar elementos utilizando o cy.contains()', () => {
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

    cy.get('[class = "success"]')
      .should('not.be.visible')

    cy.contains('.button', 'Enviar')
      .click()

    cy.get('[class = "success"]')
      .should('be.visible')

  })

})
