# stock

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock |
| Nome Amigável | Inventário |
| Autor | Odoo S.A. |
| Versão | 16.0.1.1 |
| Repositório | https://www.odoo.com/app/inventory |

## Descrição

Módulo principal de gestão de estoque do Odoo. Permite criar transferências, inventário e gerenciar todo o ciclo de estoque.

## Dependências

- base
- mail

## Modelos Principais

### stock.picking
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número da transferência |
| state | Selection | Status |
| picking_type_id | Many2one | Tipo de operação |
| location_id | Many2one | Local de origem |
| location_dest_id | Many2one | Local de destino |
| move_ids | One2many | Movimentações |

### stock.move
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_id | Many2one | Transferência |
| product_id | Many2one | Produto |
| product_uom_qty | Float | Quantidade |
| state | Selection | Status |

## Views/Menus

- **Menu**: Estoque > Operações
- **Views**: tree, form, kanban, search

## Segurança

- **Grupos**: stock.group_stock_user

## Configuração

- Configurações > Estoque
- Tipos de operação
- Locais

## Notas de Migração

- Odoo 14 → 16: Batch transfer automático, Chatter nos transfers
