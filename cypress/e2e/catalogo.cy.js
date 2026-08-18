/// <reference types="cypress" />

describe('Funcionalidade Catálogo de Livros', () => {

    beforeEach(() => {
        cy.visit('catalog.html');
    });

    // Caso de teste exemplo de um elemento específico no qual o elemento está mal identificado. 
    it.skip('Deve clicar no botão adicionar a cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click();
        cy.get('#cart-count').should('contain', 1);
        cy.get('#global-alert-container').should('contain', '1984');
    });

    it('Deve clicar em todos os botões adicionar a cesta', () => {
        cy.get('.btn-primary').click({ multiple: true });
    });

    it('Deve clicar no primeiro botão adicionar a cesta', () => {
        cy.get('.btn-primary').first().click();
        cy.get('#global-alert-container').should('contain', '1984');
    });

    it('Deve clicar no último botão adicionar a cesta', () => {
        cy.get('.btn-primary').last().click();
        cy.get('#global-alert-container').should('contain', 'foi adicionado à cesta!');
    });

    it('Deve clicar no terceiro botão adicionar a cesta', () => {
        cy.get('.btn-primary').eq(2).click();
        cy.get('#global-alert-container').should('contain', 'A Divina Comédia');
    });

    it('Deve clicar no quinto botão adicionar a cesta', () => {
        cy.get('.btn-primary').eq(4).click();
        cy.get('#global-alert-container').should('contain', 'A Metamorfose');
    });

    it('Deve clicar no nome do livro e direcionar para a página do livro', () => {
        cy.contains('Dom Casmurro').click();
        cy.url().should('include', 'book-details');
        cy.get('#add-to-cart-btn').click();
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!');
        cy.get('#cart-count').should('contain', 1);
    });

});