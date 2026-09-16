# purchase

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase |
| Nome Amigável | Compras |
| Autor | Odoo S.A. |
| Versão | 16.0.1.2 |
| Repositório | https://www.odoo.com/app/purchase |

## Descrição

Módulo principal de gestão de compras do Odoo. Permite criar RFQs, ordens de compra e gerenciar todo o ciclo de compras.

## Dependências

- base
- account
- mail

## Modelos Principais

### purchase.order
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número do pedido |
| partner_id | Many2one | Fornecedor |
| state | Selection | Status (draft, sent, purchase, done, cancel) |
| order_line | One2many | Linhas do pedido |
| date_order | Datetime | Data do pedido |
| user_id | Many2one | Comprador |
| currency_id | Many2one | Moeda |
| amount_total | Monetário | Valor total |

### purchase.order.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| order_id | Many2one | Pedido |
| product_id | Many2one | Produto |
| name | Text | Descrição |
| product_qty | Float | Quantidade |
| price_unit | Monetário | Preço unitário |
| tax_id | Many2many | Impostos |
| price_subtotal | Monetário | Subtotal |

## Views/Menus

- **Menu**: Compras > Pedidos > RFQs
- **Views**: tree, form, kanban, search

## Segurança

- **Grupos**: purchase.group_purchase_user

## Configuração

- Configurações > Compras
- Fornecedores
- Produtos

## Notas de Migração

- Odoo 14 → 16: RFQ alternativas, Call for Tender melhorado
