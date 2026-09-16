# hr_expense_invoice

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_expense_invoice |
| Nome Amigável | Fatura de Despesa |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr-expense |

## Descrição

Criação de faturas a partir de despesas.

## Dependencies

- hr_expense
- account

## Models

### hr.expense (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| invoice_id | Many2one | Fatura associada |

## Views/Menus

- Extende views de hr.expense

## Segurança

- Herda permissões dos módulos hr_expense e account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
