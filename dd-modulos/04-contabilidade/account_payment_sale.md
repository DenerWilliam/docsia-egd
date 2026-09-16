# account_payment_sale

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | account_payment_sale |
| Nome Amigável | Account Payment Sale |
| Autor | Akretion, OCA |
| Versão | 16.0.1.0.7 |
| Repositório | https://github.com/OCA/bank-payment |

## Descrição

Integração entre pagamento e venda.

## Dependências

- account_payment_partner
- sale

## Modelos Principais

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| payment_mode_id | Many2one | Modo de pagamento |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos account_payment_partner e sale

## Configuração

- Configurações > Vendas > Pagamento

## Notas de Migração

- Migrado para v16 pelo OCA
