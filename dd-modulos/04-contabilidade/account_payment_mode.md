# account_payment_mode

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_payment_mode |
| Nome Amigável | Account Payment Mode |
| Autor | Akretion, OCA |
| Versão | 16.0.2.0.0 |
| Repositório | https://github.com/OCA/bank-payment |

## Descrição

Permite definir modos de pagamento (boleto, transferência, etc.).

## Dependências

- account
- base_iban

## Modelos Principais

### account.payment.mode
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do modo |
| payment_method_id | Many2one | Método de pagamento |
| fixed_journal_id | Many2one | Diário fixo |

## Views/Menus

- **Menu**: Contabilidade > Configuração > Modos de Pagamento
- **Views**: tree, form

## Segurança

- **Grupos**: account.group_account_manager

## Configuração

- Configurações > Contabilidade > Modos de Pagamento

## Notas de Migração

- Migrado para v16 pelo OCA
