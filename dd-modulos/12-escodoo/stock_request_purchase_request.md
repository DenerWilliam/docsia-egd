# stock_request_purchase_request

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request_purchase_request |
| Nome Amigável | Requisição Estoque Requisição Compra |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/stock-addons |

## Descrição

Integração entre requisição de estoque e requisição de compra.

## Dependencies

- stock_request
- purchase_request

## Models

### stock.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_request_id | Many2one | Requisição compra |

## Views/Menus

- Extende views de stock.request

## Segurança

- Herda permissões dos módulos stock_request e purchase_request

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
