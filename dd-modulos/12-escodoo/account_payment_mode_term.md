# account_payment_mode_term

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_payment_mode_term |
| Nome Amigável | Modo de Pagamento Prazo |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/account-addons |

## Descrição

Modo de pagamento com prazo.

## Dependencies

- account_payment_mode

## Models

### account.payment.mode (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| payment_term_id | Many2one | Prazo pagamento |

## Views/Menus

- Extende views de account.payment.mode

## Segurança

- Herda permissões do módulo account_payment_mode

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
