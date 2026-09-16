# account_payment_partner

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_payment_partner |
| Nome Amigável | Account Payment Partner |
| Autor | Akretion, OCA |
| Versão | 16.0.1.2.9 |
| Repositório | https://github.com/OCA/bank-payment |

## Descrição

Adiciona informações de pagamento ao parceiro.

## Dependências

- account_payment_mode
- base_iban

## Modelos Principais

### res.partner (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| property_supplier_payment_mode_id | Many2one | Modo de pagamento fornecedor |
| property_customer_payment_mode_id | Many2one | Modo de pagamento cliente |

## Views/Menus

- Extende views de res.partner

## Segurança

- Herda permissões do módulo account_payment_mode

## Configuração

- Configurações > Fatores > Pagamento

## Notas de Migração

- Migrado para v16 pelo OCA
