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
    cy.get('[id="firstName"]')
      .should('be.visible')
      .type('nome')
      .should('have.value', 'nome')
      .clear().should('have.value', '')

    cy.get('[id = "lastName"]')
      .should('be.visible')
      .type('sobrenome')
      .should('have.value', 'sobrenome')
      .clear().should('have.value', '')

    cy.get('[id = "email"]')
      .should('be.visible')
      .type('teste@teste.com')
      .should('have.value', 'teste@teste.com')
      .clear().should('have.value', '')

    cy.get('[id = "open-text-area"]')
      .should('be.visible')
      .type('Campo texto', { delay: 0 })
      .should('have.value', 'Campo texto')
      .clear().should('have.value', '')

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
    cy.fillMandatoryFieldsAndSubmit()

    cy.get('[class = "success"]')
      .should('be.visible')
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

  //lesson 03
  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('select').select('YouTube')
      .should('have.value', 'youtube')
  })

  //lesson 03 (extra 1)
  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('select').select('mentoria')
      .should('have.value', 'mentoria')
  })

  //lesson 03 (extra 2)
  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('select').select(1)
      .should('have.value', 'blog')
  })

  //lesson 04 
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type = "radio"]').check('feedback')
  })

  //lesson 04 (extra)
  it('marca cada tipo de atendimento', () => {
    cy.get('input[type = "radio"]')
      .each(($el) => {
        cy.wrap($el).check().should('be.checked')
      })
  })

  //lesson 05
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type = "checkbox"]').check()
      .last().uncheck()
  })

  //lesson 05 (extra)
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário [usando .check()]', () => {
    cy.get('input[type = "checkbox"]').check('phone')

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
})
