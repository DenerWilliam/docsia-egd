# stock_request_tier_validation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request_tier_validation |
| Nome Amigável | Validação Requisição Estoque |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/stock-addons |

## Descrição

Validação de múltiplos níveis para requisições de estoque.

## Dependencies

- stock_request
- base_tier_validation

## Models

### stock.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| review_ids | One2many | Validações |

## Views/Menus

- Extende views de stock.request

## Segurança

- Herda permissões dos módulos stock_request e base_tier_validation

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
