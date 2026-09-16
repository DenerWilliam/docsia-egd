# purchase_manual_delivery

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_manual_delivery |
| Nome Amigável | Entrega Manual Compra |
| Autor | Escodoo |
| Versão | 16.0.1.1.1 |
| Repositório | https://github.com/Escodoo/purchase-addons |

## Descrição

Permite criar entregas manuais a partir de pedidos de compra.

## Dependencies

- purchase
- stock

## Models

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| manual_delivery | Boolean | Entrega manual |

## Views/Menus

- Extende views de purchase.order

## Segurança

- Herda permissões dos módulos purchase e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
