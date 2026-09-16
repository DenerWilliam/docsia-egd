# stock_request_picking_type

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request_picking_type |
| Nome Amigável | Stock Request Picking Type |
| Autor | Open Source Integrators, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/stock-logistics-request |

## Descrição

Permite selecionar o tipo de transferência nas requisições de estoque.

## Dependências

- stock_request

## Modelos Principais

### stock.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| picking_type_id | Many2one | Tipo de operação |

## Views/Menus

- Extende views de stock.request

## Segurança

- Herda permissões do módulo stock_request

## Configuração

- Configurações > Estoque > Tipos de Operação

## Notas de Migração

- Migrado para v16 pelo OCA
