# sale_stock_manual_delivery

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_stock_manual_delivery |
| Nome Amigável | Entrega Manual Venda |
| Autor | Escodoo |
| Versão | 16.0.1.0.2 |
| Repositório | https://github.com/Escodoo/sale-addons |

## Descrição

Permite criar entregas manuais a partir de pedidos de venda.

## Dependencies

- sale_stock
- purchase_manual_delivery

## Models

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| manual_delivery | Boolean | Entrega manual |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos sale_stock e purchase_manual_delivery

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
