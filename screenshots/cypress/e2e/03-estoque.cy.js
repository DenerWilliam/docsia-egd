describe('Fluxo de Estoque - Screenshots', () => {
  
  beforeEach(() => {
    cy.visit('/web/login')
    cy.get('#login').type('admin')
    cy.get('#password').type('admin')
    cy.get('button[type="submit"]').click()
    cy.wait(2000)
  })

  it('01 - Tela Inicial Estoque', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(3000)
    cy.screenshot('03-estoque/01-tela-inicial')
  })

  it('02 - Listar Transferencias', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(3000)
    cy.screenshot('03-estoque/02-listar-transferencias')
  })

  it('03 - Criar Transferencia', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(2000)
    cy.get('button.o_list_button_add').click()
    cy.wait(2000)
    cy.screenshot('03-estoque/03-criar-transferencia')
  })

  it('04 - Selecionar Operacao', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(2000)
    cy.get('button.o_list_button_add').click()
    cy.wait(2000)
    cy.get('div[name="picking_type_id"] input').click()
    cy.wait(1000)
    cy.get('.ui-autocomplete li').first().click()
    cy.wait(1000)
    cy.screenshot('03-estoque/04-selecionar-operacao')
  })

  it('05 - Adicionar Produto', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(2000)
    cy.get('button.o_list_button_add').click()
    cy.wait(2000)
    cy.get('div[name="picking_type_id"] input').click()
    cy.wait(1000)
    cy.get('.ui-autocomplete li').first().click()
    cy.wait(1000)
    cy.get('button.o_button_new').click()
    cy.wait(1000)
    cy.screenshot('03-estoque/05-adicionar-produto')
  })

  it('06 - Confirmar Transferencia', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(2000)
    cy.get('button.o_list_button_add').click()
    cy.wait(2000)
    cy.get('div[name="picking_type_id"] input').click()
    cy.wait(1000)
    cy.get('.ui-autocomplete li').first().click()
    cy.wait(1000)
    cy.get('button.o_button_new').click()
    cy.wait(1000)
    cy.get('button[name="action_confirm"]').click()
    cy.wait(2000)
    cy.screenshot('03-estoque/06-confirmar-transferencia')
  })

  it('07 - Validar Transferencia', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(2000)
    cy.get('button.o_list_button_add').click()
    cy.wait(2000)
    cy.get('div[name="picking_type_id"] input').click()
    cy.wait(1000)
    cy.get('.ui-autocomplete li').first().click()
    cy.wait(1000)
    cy.get('button.o_button_new').click()
    cy.wait(1000)
    cy.get('button[name="action_confirm"]').click()
    cy.wait(2000)
    cy.get('button[name="button_validate"]').click()
    cy.wait(2000)
    cy.screenshot('03-estoque/07-validar-transferencia')
  })

  it('08 - Historico de Movimentacoes', () => {
    cy.visit('/web#action=stock.action_stock_picking_tree')
    cy.wait(2000)
    cy.get('button.o_list_button_add').click()
    cy.wait(2000)
    cy.get('div[name="picking_type_id"] input').click()
    cy.wait(1000)
    cy.get('.ui-autocomplete li').first().click()
    cy.wait(1000)
    cy.get('button.o_button_new').click()
    cy.wait(1000)
    cy.get('button[name="action_confirm"]').click()
    cy.wait(2000)
    cy.get('button[name="button_validate"]').click()
    cy.wait(2000)
    cy.visit('/web#action=stock.action_stock_activity')
    cy.wait(2000)
    cy.screenshot('03-estoque/08-historico-movimentacoes')
  })

  it('09 - Estoque por Produto', () => {
    cy.visit('/web#action=stock.action_stock_quant_tree')
    cy.wait(3000)
    cy.screenshot('03-estoque/09-estoque-por-produto')
  })

  it('10 - Inventarios', () => {
    cy.visit('/web#action=stock.action_inventory_tree')
    cy.wait(3000)
    cy.screenshot('03-estoque/10-inventarios')
  })

})
