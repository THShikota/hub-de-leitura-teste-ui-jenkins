/// <reference types="cypress" />

describe('Funcionalidade: Contato', () => {

  beforeEach(() => {
    cy.visit('index.html');
  });

  it('Deve preencher o formulário de contato com sucesso', () => {
    cy.get('[name="name"]').type('Tiago Shikota');
    cy.get('[name="email"]').type('tiago@teste.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    // Resultado esperado: exibir a mensagem de sucesso "Contato enviado com sucesso!"
    cy.contains('Contato enviado com sucesso!').should('exist');
  });

  it('Deve exibir mensagem de erro ao enviar o formulário sem preencher o campo obrigatório nome', () => {
    cy.get('[name="email"]').type('tiago@teste.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo Nome.');
  });

  it('Deve exibir mensagem de erro ao enviar o formulário sem preencher o campo obrigatório email', () => {
    cy.get('[name="name"]').type('Tiago Shikota');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, preencha o campo E-mail.');
  });

  it('Deve exibir mensagem de erro ao enviar o formulário sem preencher o campo obrigatório assunto', () => {
    cy.get('[name="name"]').type('Tiago Shikota');
    cy.get('[name="email"]').type('tiago@teste.com');
    cy.get('[name="message"]').type('Mensagem de teste');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, selecione o Assunto.');
  });

  it('Deve exibir mensagem de erro ao enviar o formulário sem preencher o campo obrigatório mensagem', () => {
    cy.get('[name="name"]').type('Tiago Shikota');
    cy.get('[name="email"]').type('tiago@teste.com');
    cy.get('[name="subject"]').select('Sugestões');
    cy.get('#btn-submit').click();
    cy.get('#alert-container').should('contain', 'Por favor, escreva sua Mensagem.');
  });
});