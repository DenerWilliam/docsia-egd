# sale_stock_picking_invoicing

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_stock_picking_invoicing |
| Nome Amigável | Sales Stock Picking Invocing |
| Autor | Akretion, OCA |
| Versão | 16.0.1.0.1 |
| Repositório | https://github.com/OCA/account-invoicing |

## Descrição

Permite faturar na confirmação de transferência de vendas, em vez de faturar o pedido inteiro.

## Dependências

- sale_stock
- account

## Modelos Principais

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| to_invoice | Boolean | Faturar nesta transferência |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões dos módulos sale e stock

## Configuração

- Configurações > Estoque > Faturamento

## Notas de Migração

- Módulo OCA migrado para v16
