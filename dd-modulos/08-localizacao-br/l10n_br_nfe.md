# l10n_br_nfe

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_nfe |
| Nome Amigável | NF-e |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Emissão e consulta de Notas Fiscais Eletrônicas (NF-e).

## Dependencies

- l10n_br_fiscal
- l10n_br_nfe_spec

## Models

### l10n_br_nfe.document
| Campo | Tipo | Descrição |
|-------|------|-----------|
| nfe_number | Integer | Número da NF-e |
| nfe_chave | Char | Chave de acesso |
| state | Selection | Status |

## Views/Menus

- **Menu**: Fiscal > NF-e
- **Views**: tree, form

## Segurança

- Herda permissões do módulo l10n_br_fiscal

## Configuração

- Configurações > Fiscal > NF-e

## Notas de Migração

- Migrado para v16 pelo OCA
