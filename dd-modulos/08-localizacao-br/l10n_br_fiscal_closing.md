# l10n_br_fiscal_closing

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_fiscal_closing |
| Nome Amigável | Encerramento Fiscal |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Encerramento de período fiscal.

## Dependencies

- l10n_br_fiscal

## Models

### l10n_br_fiscal.closing
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| date_start | Date | Data início |
| date_end | Date | Data fim |
| state | Selection | Status |

## Views/Menus

- **Menu**: Fiscal > Encerramento
- **Views**: tree, form

## Segurança

- Herda permissões do módulo l10n_br_fiscal

## Configuração

- Configurações > Fiscal > Encerramento

## Notas de Migração

- Migrado para v16 pelo OCA
