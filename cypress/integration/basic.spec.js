/// <references types="cypress" />

describe('Cypress basics', () => {
    it('Should visit a page assert title', () => {
        cy.visit('http://wcaquino.me/cypress/componentes.html');
        
        cy.title()
            .should('be.equal', 'Campo de Treinamento')
            .and('contain', 'Campo');
    });
});

