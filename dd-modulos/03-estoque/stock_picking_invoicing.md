# stock_picking_invoicing

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_picking_invoicing |
| Nome Amigável | Stock Picking Invoicing |
| Autor | Agile Business Group, OCA |
| Versão | 16.0.1.0.4 |
| Repositório | https://github.com/OCA/account-invoicing |

## Descrição

Permite faturar na confirmação de transferência, em vez de faturar o pedido inteiro.

## Dependências

- stock
- account

## Modelos Principais

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| to_invoice | Boolean | Faturar nesta transferência |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões do módulo stock

## Configuração

- Configurações > Estoque > Faturamento

## Notas de Migração

- Módulo OCA migrado para v16
