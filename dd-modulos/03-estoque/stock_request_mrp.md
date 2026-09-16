# stock_request_mrp

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request_mrp |
| Nome Amigável | Stock Request MRP |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.0.2 |
| Repositório | https://github.com/OCA/stock-logistics-request |

## Descrição

Integração entre requisições de estoque e manufatura.

## Dependências

- stock_request
- mrp

## Modelos Principais

### stock.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| mrp_production_ids | One2many | Ordens de produção associadas |

## Views/Menus

- Extende views de stock.request

## Segurança

- Herda permissões dos módulos stock_request e mrp

## Configuração

- Configurações > Estoque > Produção

## Notas de Migração

- Migrado para v16 pelo OCA
