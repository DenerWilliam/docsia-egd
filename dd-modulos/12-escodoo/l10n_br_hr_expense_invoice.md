# l10n_br_hr_expense_invoice

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_hr_expense_invoice |
| Nome Amigável | Fatura de Despesa Brasileira |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/l10n-brazil |

## Descrição

Integração entre despesas e fiscal brasileiro.

## Dependencies

- hr_expense_invoice
- l10n_br_account

## Models

### hr.expense (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |

## Views/Menus

- Extende views de hr.expense

## Segurança

- Herda permissões dos módulos hr_expense_invoice e l10n_br_account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
