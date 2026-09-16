# stock_request_purchase

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request_purchase |
| Nome Amigável | Stock Request Purchase |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.0.3 |
| Repositório | https://github.com/OCA/stock-logistics-request |

## Descrição

Integração entre requisições de estoque e compras.

## Dependências

- stock_request
- purchase

## Modelos Principais

### stock.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_order_ids | One2many | Ordens de compra associadas |

## Views/Menus

- Extende views de stock.request

## Segurança

- Herda permissões dos módulos stock_request e purchase

## Configuração

- Configurações > Estoque > Compras

## Notas de Migração

- Migrado para v16 pelo OCA
