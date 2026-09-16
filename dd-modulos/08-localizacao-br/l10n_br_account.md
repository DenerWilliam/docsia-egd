# l10n_br_account

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_account |
| Nome Amigável | Contabilidade Brasileira |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Integração entre contabilidade e fiscal brasileiro.

## Dependencies

- l10n_br_fiscal
- account

## Models

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| fiscal_document_id | Many2one | Documento fiscal |
| nfe_number | Integer | Número NF-e |

## Views/Menus

- Extende views de account.move

## Segurança

- Herda permissões dos módulos l10n_br_fiscal e account

## Configuração

- Configurações > Contabilidade > Fiscal

## Notas de Migração

- Migrado para v16 pelo OCA
