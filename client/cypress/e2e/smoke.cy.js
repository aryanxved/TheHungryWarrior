describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
    cy.contains('The Hungry Warrior');
    
  });
  })