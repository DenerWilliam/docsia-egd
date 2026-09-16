# hr_expense_journal

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_expense_journal |
| Nome Amigável | Diário de Despesas |
| Autor | Eficoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/hr-expense |

## Descrição

Diário específico para despesas.

## Dependencies

- hr_expense
- account

## Models

### account.journal (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Diário de despesas |

## Views/Menus

- Extende views de account.journal

## Segurança

- Herda permissões dos módulos hr_expense e account

## Configuração

- Configurações > Contabilidade > Diários

## Notas de Migração

- Migrado para v16 pelo OCA
