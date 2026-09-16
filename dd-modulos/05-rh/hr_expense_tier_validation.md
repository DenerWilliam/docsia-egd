# hr_expense_tier_validation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_expense_tier_validation |
| Nome Amigável | Validação de Despesas |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr-expense |

## Descrição

Validação de despesas com múltiplos níveis.

## Dependencies

- hr_expense
- base_tier_validation

## Models

### hr.expense (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| review_ids | One2many | Validações |

## Views/Menus

- Extende views de hr.expense

## Segurança

- Herda permissões dos módulos hr_expense e base_tier_validation

## Configuração

- Configurações > RH > Validação de Despesas

## Notas de Migração

- Migrado para v16 pelo OCA
