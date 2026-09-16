# l10n_br_fiscal_dfe

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_fiscal_dfe |
| Nome Amigável | Documentos Fiscais Eletrônicos |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Distribuição de Documentos Fiscais Eletrônicos (DF-e).

## Dependencies

- l10n_br_fiscal

## Models

### l10n_br_fiscal.dfe
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| type | Selection | Tipo |
| state | Selection | Status |

## Views/Menus

- **Menu**: Fiscal > DF-e
- **Views**: tree, form

## Segurança

- Herda permissões do módulo l10n_br_fiscal

## Configuração

- Configurações > Fiscal > DF-e

## Notas de Migração

- Migrado para v16 pelo OCA
