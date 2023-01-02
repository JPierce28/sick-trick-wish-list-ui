describe('Sick Trick Wish List', () => {
 beforeEach(() => {
  cy.intercept('http://localhost:3001/api/v1/tricks', {
    method: 'GET',
    fixture: '../fixtures/example.json'
  })
  cy.visit('http://localhost:3000/')
 })
 it('Should have a title', () => {
  cy.contains('h1', 'Sick Trick Wish List')
 })
 it('Should load 3 trick cards', () => {
  cy.get('.tricks-container').within(() => {
    cy.get('.trick-card').should('have.length', 3)
  })
 })
 it('Should display stance, name, obstacle and url on the trick card', () => {
  cy.get('.trick-card').eq(0)
  .should('contain', 'Stance: regular')
  .should('contain', 'Name: treflip')
  .should('contain', 'Obstacle: flat ground')
  .should('contain', 'https://www.youtube.com/watch?v=XGw3YkQmNig')
 })
 it('Should display a form', () => {
  cy.get('.form')
 })
 it('Should have a select menu for stance with Regular or Switch as options', () => {
  cy.get('.stance-select').contains('Regular')
  cy.get('.stance-select').contains('Switch')
 })
 it('Should have a select menu for obstacle with Flatground, Stairs, Ledge or Pool as options', () => {
  cy.get('.obstacle-select').contains('Flatground')
  cy.get('.obstacle-select').contains('Stairs')
  cy.get('.obstacle-select').contains('Ledge')
  cy.get('.obstacle-select').contains('Pool')
 })
 it('Should have a button on the form to submit a new trick', () => {
  cy.get('.submit-button').contains('SEND IT')
 })
})