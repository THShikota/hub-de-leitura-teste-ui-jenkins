/// <reference types="cypress" />
import user from '../fixtures/usuario.json'

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('login.html');
  });

  it('Deve realizar login com sucesso', () => {
    cy.get('#email').type('usuario@teste.com');
    cy.get('#password').type('user123');
    cy.get('#login-btn').click();
    cy.url().should('include', 'dashboard.html');
  });

  it('Deve fazer login com sucesso - Usando comando customizado', () => {
    cy.login('usuario@teste.com', 'user123');
  });

  it('Deve fazer login com sucesso com conta Admin - Usando comando customizado', () => {
    cy.login('admin@biblioteca.com', 'admin123');
  });

  it('Deve fazer login com sucesso - Usando importação da massa de dados', () => {
    cy.login(user[0].email, user[0].senha);
  });

  it('Deve fazer login com sucesso - Usando Fixture', () => {
    cy.fixture('usuario').then((usr) => {
      cy.login(usr[0].email, usr[0].senha);
    });
  });

  /*it('Deve fazer login com sucesso utilizando vários usuários da massa de dados - Usando Fixture', () => {
    cy.fixture('usuario').then((usr) => {
      usr.forEach((user) => {
        cy.visit('login.html');
        cy.login(user.email, user.senha);
        cy.wait(2000);

        if (user.admin) {
          cy.url({ timeout: 5000 }).should('include', 'admin-dashboard.html');
        } else {
          cy.url({ timeout: 5000 }).should('include', 'dashboard.html');
        }

        cy.get('.fw-bold').should('contain', user.nome);
        cy.get('.user-actions > .btn-outline-danger').click({ force: true });
        cy.url().should('include', 'login.html');
      })
    })
  });
*/
});