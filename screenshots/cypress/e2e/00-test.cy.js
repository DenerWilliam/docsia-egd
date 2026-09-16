describe('Teste Basico', () => {
  it('Acessar Odoo', () => {
    cy.visit('http://localhost:14069/web/login', { timeout: 60000 })
    cy.wait(3000)
    cy.screenshot('00-test/login-page')
  })
})
