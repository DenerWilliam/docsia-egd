# hr_expense_advance_clearing

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_expense_advance_clearing |
| Nome Amigável | Adiantamento e Liquidação de Despesas |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr-expense |

## Descrição

Adiantamentos e liquidação de despesas.

## Dependencies

- hr_expense

## Models

### hr.expense (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| advance_id | Many2one | Adiantamento |

### hr.expense.advance
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Descrição |
| employee_id | Many2one | Funcionário |
| amount | Monetário | Valor |

## Views/Menus

- **Menu**: RH > Despesas > Adiantamentos
- **Views**: tree, form

## Segurança

- Herda permissões do módulo hr_expense

## Configuração

- Configurações > RH > Adiantamentos

## Notas de Migração

- Migrado para v16 pelo OCA
