# hr_expense

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_expense |
| Nome Amigável | Despesas |
| Autor | Odoo S.A. |
| Versão | 16.0.1.2 |
| Repositório | https://www.odoo.com/app/expenses |

## Descrição

Gestão de despesas de viagem e outros.

## Dependencies

- hr
- account

## Models

### hr.expense
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Descrição |
| employee_id | Many2one | Funcionário |
| product_id | Many2one | Produto/Serviço |
| unit_amount | Monetário | Valor unitário |
| state | Selection | Status |

## Views/Menus

- **Menu**: RH > Despesas
- **Views**: tree, form, kanban

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Despesas

## Notas de Migração

- Módulo padrão Odoo
