# stock_request_purchase_request

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request_purchase_request |
| Nome Amigável | Stock Request Purchase Request |
| Autor | Escodoo, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/stock-logistics-warehouse |

## Descrição

Integração entre requisições de estoque e requisições de compra.

## Dependências

- stock_request
- purchase_request

## Modelos Principais

### stock.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_request_ids | One2many | Requisições de compra associadas |

## Views/Menus

- Extende views de stock.request

## Segurança

- Herda permissões dos módulos stock_request e purchase_request

## Configuração

- Configurações > Estoque > Requisições

## Notas de Migração

- Customização Escodoo migrada para v16
