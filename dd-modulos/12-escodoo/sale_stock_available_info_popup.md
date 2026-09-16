# sale_stock_available_info_popup

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_stock_available_info_popup |
| Nome Amigável | Info Disponibilidade Estoque |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/sale-addons |

## Descrição

Popup com informação de disponibilidade de estoque.

## Dependencies

- sale_stock
- stock

## Models

### sale.order.line (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| stock_available | Float | Estoque disponível |

## Views/Menus

- Extende views de sale.order.line

## Segurança

- Herda permissões dos módulos sale_stock e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
