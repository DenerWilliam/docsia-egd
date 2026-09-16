# l10n_br_mdfe

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_mdfe |
| Nome Amigável | MDF-e |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Manifesto Eletrônico de Documentos Fiscais (MDF-e).

## Dependencies

- l10n_br_fiscal
- l10n_br_nfe_spec

## Models

### l10n_br_mdfe.document
| Campo | Tipo | Descrição |
|-------|------|-----------|
| mdfe_number | Integer | Número do MDF-e |
| mdfe_chave | Char | Chave de acesso |
| state | Selection | Status |

## Views/Menus

- **Menu**: Fiscal > MDF-e
- **Views**: tree, form

## Segurança

- Herda permissões do módulo l10n_br_fiscal

## Configuração

- Configurações > Fiscal > MDF-e

## Notas de Migração

- Migrado para v16 pelo OCA
