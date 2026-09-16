# website_sale_picking

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | website_sale_picking |
| Nome Amigável | Venda Website Picking |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/website-addons |

## Descrição

Integração entre venda website e picking.

## Dependencies

- website_sale
- stock

## Models

### sale.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_id | Many2one | Transferência |

## Views/Menus

- Extende views de sale.order

## Segurança

- Herda permissões dos módulos website_sale e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
