# stock_picking_analytic

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_picking_analytic |
| Nome Amigável | Stock Picking Analytic |
| Autor | ACSONE SA/NV, OCA |
| Versão | 16.0.1.0.1 |
| Repositório | https://github.com/OCA/account-analytic |

## Descrição

Adiciona centros de custo analíticos em transferências de estoque.

## Dependências

- stock
- account_analytic

## Modelos Principais

### stock.picking (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| analytic_account_id | Many2one | Centro de custo |

## Views/Menus

- Extende views de stock.picking

## Segurança

- Herda permissões do módulo stock

## Configuração

- Configurações > Estoque > Analítico

## Notas de Migração

- Migrado para v16 pelo OCA
