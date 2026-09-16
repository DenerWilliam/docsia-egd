# account_payment

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_payment |
| Nome Amigável | Payment - Account |
| Autor | Odoo S.A. |
| Versão | 16.0.2.0 |
| Repositório | https://www.odoo.com/app/invoicing |

## Descrição

Gestão de pagamentos.

## Dependências

- account

## Modelos Principais

### account.payment
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Número do pagamento |
| payment_type | Selection | Tipo (inbound, outbound, transfer) |
| partner_id | Many2one | Parceiro |
| amount | Monetário | Valor |
| state | Selection | Status |

## Views/Menus

- **Menu**: Contabilidade > Pagamentos
- **Views**: tree, form, kanban

## Segurança

- **Grupos**: account.group_account_manager

## Configuração

- Configurações > Contabilidade > Pagamentos

## Notas de Migração

- Módulo padrão Odoo
