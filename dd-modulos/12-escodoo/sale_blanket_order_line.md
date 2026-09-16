# sale_blanket_order_line

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_blanket_order_line |
| Nome Amigável | Linha Ordem Abrangente |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/sale-addons |

## Descrição

Linha de ordem abrangente de venda.

## Dependencies

- sale_blanket_order

## Models

### sale.blanket.order.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| blanket_order_id | Many2one | Ordem abrangente |
| product_id | Many2one | Produto |
| qty | Float | Quantidade |

## Views/Menus

- **Menu**: Vendas > Ordens Abrangentes > Linhas
- **Views**: tree, form

## Segurança

- Herda permissões do módulo sale_blanket_order

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
