# sale_expense

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_expense |
| Nome Amigável | Despesas de Vendas |
| Autor | Odoo S.A. |
| Versão | 16.0.1.0 |
| Repositório | https://www.odoo.com/app/sales |

## Descrição

Integração entre despesas de funcionários e vendas. Permite associar despedas a pedidos de venda.

## DependENCIES

- sale
- hr_expense

## Modelos Principais

### hr.expense (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| sale_order_id | Many2one | Pedido de venda associado |

## Views/Menus

- Extende views de hr.expense

## Segurança

- Herda permissões dos módulos sale e hr_expense

## Configuração

- Configurações > Despesas

## Notas de Migração

- Módulo padrão Odoo
