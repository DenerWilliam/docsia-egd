# account_payment_order

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_payment_order |
| Nome Amigável | Account Payment Order |
| Autor | ACSONE SA/NV, OCA |
| Versão | 16.0.1.14.0 |
| Repositório | https://github.com/OCA/bank-payment |

## Descrição

Permite criar ordens de pagamento bancário para envio ao banco.

## Dependências

- account_payment_mode
- base_iban

## Modelos Principais

### account.payment.order
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número da ordem |
| state | Selection | Status |
| payment_mode_id | Many2one | Modo de pagamento |
| line_ids | One2many | Linhas de pagamento |

### account.payment.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| order_id | Many2one | Ordem de pagamento |
| partner_id | Many2one | Beneficiário |
| amount | Monetário | Valor |

## Views/Menus

- **Menu**: Contabilidade > Pagamentos > Ordens de Pagamento
- **Views**: tree, form

## Segurança

- **Grupos**: account.group_account_manager

## Configuração

- Configurações > Contabilidade > Modos de Pagamento

## Notas de Migração

- Migrado para v16 pelo OCA
