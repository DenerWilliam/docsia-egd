# purchase_tier_validation

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | purchase_tier_validation |
| Nome Amigável | Purchase Tier Validation |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.1.1 |
| Repositório | https://github.com/OCA/purchase-workflow |

## Descrição

Adiciona validação por camadas (aprovações) para ordens de compra.

## Dependências

- purchase
- base_tier_validation

## Modelos Principais

### purchase.order (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| review_ids | One2many | Reviews de aprovação |
| valid | Boolean | Válido/aprovado |

## Views/Menus

- Extende views de purchase.order

## Segurança

- Herda permissões dos módulos purchase e base_tier_validation

## Configuração

- Configurações > Compras > Aprovações

## Notas de Migração

- Migrado para v16 pelo OCA
