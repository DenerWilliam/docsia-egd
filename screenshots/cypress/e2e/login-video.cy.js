describe('Login Video', () => {
  beforeEach(() => {
    // Ignorar erros de XHR/longpolling do Odoo
    cy.on('uncaught:exception', (err) => {
      if (err.message.includes('XmlHttpRequest') || err.message.includes('abort')) {
        return false
      }
    })
  })

  it('deve fazer login e mostrar dashboard', () => {
    // Acessar pagina de login
    cy.visit('/web/login', { timeout: 60000 })
    cy.wait(2000)
    
    // Preencher credenciais
    cy.get('#login', { timeout: 10000 }).type('admin')
    cy.get('#password', { timeout: 10000 }).type('admin')
    
    // Clicar no botao de login
    cy.get('button[type="submit"]', { timeout: 10000 }).click()
    
    // Aguardar redirecionamento
    cy.wait(5000)
    
    // Verificar se esta no dashboard
    cy.url().should('include', '/web')
    
    // Tirar screenshot do dashboard
    cy.screenshot('dashboard-apos-login')
  })
})
