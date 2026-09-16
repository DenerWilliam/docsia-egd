# product_history

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | product_history |
| Nome Amigável | Histórico do Produto |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/product-addons |

## Descrição

Histórico de alterações do produto.

## Dependencies

- product

## Models

### product.history
| Campo | Tipo | Descrição |
|-------|------|-----------|
| product_id | Many2one | Produto |
| date | DateTime | Data |
| change | Text | Alteração |

## Views/Menus

- **Menu**: Produtos > Histórico
- **Views**: tree, form

## Segurança

- Herda permissões do módulo product

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
