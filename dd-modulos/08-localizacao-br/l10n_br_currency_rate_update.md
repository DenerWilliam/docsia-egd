# l10n_br_currency_rate_update

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_currency_rate_update |
| Nome Amigável | Atualização Cambial |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/l10n-brazil |

## Descrição

Atualização automática de taxas de câmbio.

## Dependencies

- l10n_br_base
- currency_rate_update

## Models

### res.currency.rate (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Atualização automática |

## Views/Menus

- Extende views de res.currency.rate

## Segurança

- Herda permissões dos módulos l10n_br_base e currency_rate_update

## Configuração

- Configurações > Fiscal > Taxas de Câmbio

## Notas de Migração

- Migrado para v16 pelo OCA
