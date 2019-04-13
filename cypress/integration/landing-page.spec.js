'use strict';

const {cy} = require('../support/index.js');

describe('Landing Page', () => {
  it('should have a get started button', () => {
    cy.visit('http://localhost:3000');
    cy.get('button')
      .should('have.class', 'btn');
  });
});
