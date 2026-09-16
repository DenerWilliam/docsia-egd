# l10n_br_account_fleet

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | l10n_br_account_fleet |
| Nome Amigável | Contabilidade Frota Brasileira |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/l10n-brazil |

## Descrição

Integração entre contabilidade, frota e fiscal brasileiro.

## Dependencies

- l10n_br_account
- account_fleet

## Models

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| vehicle_id | Many2one | Veículo |

## Views/Menus

- Extende views de account.move

## Segurança

- Herda permissões dos módulos l10n_br_account e account_fleet

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
