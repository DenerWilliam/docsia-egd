# account_due_list_payment_mode

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_due_list_payment_mode |
| Nome Amigável | Payment Due List Payment Mode |
| Autor | Obertix Free Solutions, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/account-payment |

## Descrição

Adiciona modo de pagamento na lista de pagamentos pendentes.

## Dependências

- account_due_list
- account_payment_mode

## Models

### account.move.line (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| payment_mode_id | Many2one | Modo de pagamento |

## Views/Menus

- Extende views de account.move.line

## Segurança

- Herda permissões dos módulos account_due_list e account_payment_mode

## Configuração

- Sem configuração adicional

## Notas de Migração

- Migrado para v16 pelo OCA
