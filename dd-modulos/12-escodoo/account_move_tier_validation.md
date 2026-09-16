# account_move_tier_validation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_move_tier_validation |
| Nome Amigável | Validação Lançamento Contábil |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/account-addons |

## Descrição

Validação de múltiplos níveis para lançamentos contábeis.

## Dependencies

- account
- base_tier_validation

## Models

### account.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| review_ids | One2many | Validações |

## Views/Menus

- Extende views de account.move

## Segurança

- Herda permissões dos módulos account e base_tier_validation

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
