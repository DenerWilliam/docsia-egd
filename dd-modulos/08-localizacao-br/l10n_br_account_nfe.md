# l10n_br_account_nfe

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_account_nfe |
| Nome Amigável | NF-e Contabilidade |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Integração entre contabilidade e NF-e.

## Dependencies

- l10n_br_account
- l10n_br_nfe

## Models

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| nfe_id | Many2one | NF-e |

## Views/Menus

- Extende views de account.move

## Segurança

- Herda permissões dos módulos l10n_br_account e l10n_br_nfe

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
