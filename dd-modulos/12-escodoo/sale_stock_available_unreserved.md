# sale_stock_available_unreserved

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_stock_available_unreserved |
| Nome Amigável | Estoque Disponível Não Reservado |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/sale-addons |

## Descrição

Estoque disponível não reservado.

## Dependencies

- sale_stock
- stock

## Models

### sale.order.line (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| stock_available_unreserved | Float | Estoque não reservado |

## Views/Menus

- Extende views de sale.order.line

## Segurança

- Herda permissões dos módulos sale_stock e stock

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
