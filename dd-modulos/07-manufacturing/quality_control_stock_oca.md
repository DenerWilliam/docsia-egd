# quality_control_stock_oca

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | quality_control_stock_oca |
| Nome Amigável | Controle de Qualidade Estoque |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.1.0 |
| Repositório | https://github.com/OCA/manufacture |

## Descrição

Integração entre controle de qualidade e estoque.

## Dependencies

- quality_control_oca
- stock

## Models

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| inspection_ids | One2many | Inspeções |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões dos módulos quality_control_oca e stock

## Configuração

- Configurações > Qualidade > Estoque

## Notas de Migração

- Migrado para v16 pelo OCA
