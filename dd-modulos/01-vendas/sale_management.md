# sale_management

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_management |
| Nome Amigável | Vendas |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/sales |

## Descrição

Módulo principal de gestão de vendas do Odoo. Permite criar cotações, pedidos de venda, faturas e gerenciar todo o ciclo de vendas.

## Dependências

- sale
- account
- stock
- mail

## Modelos Principais

### sale.order
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número do pedido |
| partner_id | Many2one | Cliente |
| state | Selection | Status (draft, sent, sale, done, cancel) |
| order_line | One2many | Linhas do pedido |
| date_order | Datetime | Data do pedido |
| user_id | Many2one | Vendedor |
| currency_id | Many2one | Moeda |
| amount_total | Monetário | Valor total |

### sale.order.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| order_id | Many2one | Pedido |
| product_id | Many2one | Produto |
| name | Text | Descrição |
| product_uom_qty | Float | Quantidade |
| price_unit | Monetário | Preço unitário |
| tax_id | Many2many | Impostos |
| price_subtotal | Monetário | Subtotal |

## Views/Menus

- **Menu**: Vendas > Vendas > Pedidos
- **Views**: tree, form, kanban, search
- **Actions**: action_orders

## Segurança

- **Grupos**: sales_team.group_sales_salesman
- **Acessos**: sale.order, sale.order.line

## Configuração

- Configurações > Vendas
- Equipes de vendas
- Variantes de produto
- Cotações de vendas

## Notas de Migração

- Odoo 14 → 16: Edição inline, novos campos de analytic
