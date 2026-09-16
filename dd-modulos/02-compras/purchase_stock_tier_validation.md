# purchase_stock_tier_validation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_stock_tier_validation |
| Nome Amigável | Purchase Stock Tier Validation |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Validação por camadas para transferências de estoque de compra.

## Dependências

- purchase_stock
- base_tier_validation

## Modelos Principais

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| review_ids | One2many | Reviews de aprovação |
| valid | Boolean | Válido/aprovado |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões dos módulos purchase_stock e base_tier_validation

## Configuração

- Configurações > Estoque > Aprovações

## Notas de Migração

- Módulo OCA migrado para v16
