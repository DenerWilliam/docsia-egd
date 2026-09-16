# sale_blanket_order_pricelist_taxes

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | sale_blanket_order_pricelist_taxes |
| Nome Amigável | Prazos e Impostos Ordem Abrangente |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/sale-addons |

## Descrição

Prazos e impostos em ordens abrangentes.

## Dependencies

- sale_blanket_order

## Models

### sale.blanket.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| pricelist_id | Many2one | Lista de preço |
| tax_ids | Many2many | Impostos |

## Views/Menus

- Extende views de sale.blanket.order

## Segurança

- Herda permissões do módulo sale_blanket_order

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
