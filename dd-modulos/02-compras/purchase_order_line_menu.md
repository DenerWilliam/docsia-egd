# purchase_order_line_menu

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_order_line_menu |
| Nome Amigável | Purchase Order Line Menu |
| Autor | Open Source Integrators, OCA |
| Versão | 16.0.2.1.2 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Adiciona menu para visualizar linhas de ordem de compra.

## Dependências

- purchase

## Modelos Principais

### purchase.order.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| - | - | Modelo existente com menu adicional |

## Views/Menus

- **Menu**: Compras > Linhas de Pedido
- **Views**: tree, search

## Segurança

- Herda permissões do módulo purchase

## Configuração

- Sem configuração adicional

## Notas de Migração

- Módulo OCA migrado para v16
