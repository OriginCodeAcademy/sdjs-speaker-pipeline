'use strict';

describe('Landing Page', () => {
  it('should have a get started button', () => {
    cy.visit('http://localhost:3000');
    cy.get('button')
      .should('have.class', 'btn');
  });
});

describe('Connect Page', () => {
  it('should have a connect button', () => {
    cy.visit('http://localhost:3000');
    cy.contains('CONNECT').should('have.attr', 'href').and('equal', 'https://www.sandiegojs.org/connect')
  });
});