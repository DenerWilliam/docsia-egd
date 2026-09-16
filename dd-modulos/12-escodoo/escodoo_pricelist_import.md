# escodoo_pricelist_import

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | escodoo_pricelist_import |
| Nome Amigável | Importação Lista de Preço |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/escodoo-addons |

## Descrição

Importação de listas de preço.

## Dependencies

- product
- account

## Models

### product.pricelist.import
| Campo | Tipo | Descrição |
|-------|------|-----------|
| file | Binary | Arquivo importação |
| pricelist_id | Many2one | Lista de preço |

## Views/Menus

- **Menu**: Vendas > Importar Lista de Preço
- **Views**: wizard

## Segurança

- Herda permissões dos módulos product e account

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
