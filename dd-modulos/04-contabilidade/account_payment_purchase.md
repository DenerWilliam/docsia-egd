# account_payment_purchase

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_payment_purchase |
| Nome Amigável | Account Payment Purchase |
| Autor | Akretion, OCA |
| Versão | 16.0.2.0.6 |
| Repositório | https://github.com/OCA/bank-payment |

## Descrição

Integração entre pagamento e compra.

## Dependências

- account_payment_partner
- purchase

## Modelos Principais

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| payment_mode_id | Many2one | Modo de pagamento |

## Views/Menus

- Extende views de purchase.order

## Segurança

- Herda permissões dos módulos account_payment_partner e purchase

## Configuração

- Configurações > Compras > Pagamento

## Notas de Migração

- Migrado para v16 pelo OCA
