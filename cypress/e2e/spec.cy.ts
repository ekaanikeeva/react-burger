// describe('service is available', function() {
//   it('should be available on localhost:3000', function() {
//     cy.visit('http://localhost:3000');
//   });
// }); 

import '@4tw/cypress-drag-drop'
const url = 'http://localhost:3000';
const email = 'enot100@yandex.ru';
const password = '123456789'

describe('burger constructor tests', () => {
  it('should drag and drop ingredient', () => {
    cy.visit(url).get('[data-item]').first().as('draggable')
    cy.get('[data-drop=data-drop-container]').as('dropContainer')
    cy.get('@draggable').drag('@dropContainer')
    cy.get('@draggable').find('.counter__num').contains('1')
    cy.get('@dropContainer').find('.constructor-element')
  })

  it('should testing ingredient details modal', () => {
    cy.visit(url)
    cy.get('[data-item]').first().as('ingredient')
    cy.get('@ingredient').click()
    cy.get('#modals').as('modal')
    cy.get('@modal').find('[data-ingredient-details=data-ingredient-details-name]').contains('Краторная булка')
    cy.get('#modals').find('[data-modal=data-modal-close]').click()
  })

  it('create order', () => {
    cy.visit(`${url}/login`);

    cy.get('[data-login=data-login-email]').type(email)
    cy.get('[data-login=data-login-password]').type(password)
    cy.get('[data-form=data-login-submit]').as('submit')
    cy.get('@submit').click()

    .then(() => {
      cy.get('[data-item]').first().as('draggable')
      cy.get('[data-drop=data-drop-container]').as('dropContainer')
      cy.get('@draggable').drag('@dropContainer')
      cy.get('[data-drop=data-drop-submit]').click()

      cy.get('[data-modal=data-modal-number]', { timeout: 20000 }).should("be.visible");
    })
    
  })
})