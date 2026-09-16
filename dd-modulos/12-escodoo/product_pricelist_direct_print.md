# product_pricelist_direct_print

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | product_pricelist_direct_print |
| Nome Amigável | Impressão de Lista de Preço |
| Autor | Escodoo |
| Versão | 16.0.2.1.2 |
| Repositório | https://github.com/Escodoo/product-addons |

## Descrição

Impressão direta de listas de preço.

## Dependencies

- product
- account

## Models

### product.pricelist.print
| Campo | Tipo | Descrição |
|-------|------|-----------|
| pricelist_id | Many2one | Lista de preço |
| product_ids | Many2many | Produtos |

## Views/Menus

- **Menu**: Vendas > Listas de Preço > Imprimir
- **Views**: wizard

## Segurança

- Herda permissões dos módulos product e account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
