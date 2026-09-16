# l10n_br_cnpj_search

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_cnpj_search |
| Nome Amigável | Consulta CNPJ |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Consulta de CNPJ em APIs externas.

## Dependencies

- l10n_br_base

## Models

### l10n_br_cnpj.search
| Campo | Tipo | Descrição |
|-------|------|-----------|
| cnpj | Char | CNPJ a consultar |
| name | Char | Razão Social |
| fantasy_name | Char | Nome Fantasia |

## Views/Menus

- **Menu**: Fiscal > Consulta CNPJ
- **Views**: wizard

## Segurança

- Herda permissões do módulo l10n_br_base

## Configuração

- Configurações > Fiscal > Consulta CNPJ

## Notas de Migração

- Migrado para v16 pelo OCA
