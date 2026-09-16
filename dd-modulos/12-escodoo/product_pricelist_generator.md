# product_pricelist_generator

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | product_pricelist_generator |
| Nome Amigável | Gerador de Lista de Preço |
| Autor | Escodoo |
| Versão | 16.0.2.1.0 |
| Repositório | https://github.com/Escodoo/product-addons |

## Descrição

Gerador automático de listas de preço.

## Dependencies

- product
- account

## Models

### product.pricelist.generator
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| pricelist_id | Many2one | Lista de preço |
| line_ids | One2many | Linhas |

## Views/Menus

- **Menu**: Vendas > Gerador Lista de Preço
- **Views**: wizard

## Segurança

- Herda permissões dos módulos product e account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
