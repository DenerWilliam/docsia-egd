# l10n_br_zip

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_zip |
| Nome Amigável | CEP Brasileiro |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Consulta de CEP em APIs externas.

## Dependencies

- l10n_br_base

## Models

### l10n_br_zip.zip
| Campo | Tipo | Descrição |
|-------|------|-----------|
| zip | Char | CEP |
| street | Char | Logradouro |
| city | Many2one | Cidade |
| state_id | Many2one | Estado |

## Views/Menus

- **Menu**: Fiscal > Consulta CEP
- **Views**: tree, form

## Segurança

- Herda permissões do módulo l10n_br_base

## Configuração

- Configurações > Fiscal > CEP

## Notas de Migração

- Migrado para v16 pelo OCA
