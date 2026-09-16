# hr_expense_work_acceptance

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_expense_work_acceptance |
| Nome Amigável | Aceitação de Trabalho para Despesas |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr-expense |

## Descrição

Aceitação de trabalho para despesas.

## Dependencies

- hr_expense
- hr_work_acceptance

## Models

### hr.expense (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| work_acceptance_id | Many2one | Aceitação de trabalho |

## Views/Menus

- Extende views de hr.expense

## Segurança

- Herda permissões dos módulos hr_expense e hr_work_acceptance

## Configuração

- Configurações > RH > Aceitação de Trabalho

## Notas de Migração

- Migrado para v16 pelo OCA
