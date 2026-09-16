# stock_request_analytic

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_request_analytic |
| Nome Amigável | Stock Request Analytic |
| Autor | ForgeFlow, OCA |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/OCA/stock-logistics-warehouse |

## Descrição

Adiciona centros de custo analíticos em requisições de estoque.

## Dependências

- stock_request
- account_analytic

## Modelos Principais

### stock.request (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| analytic_account_id | Many2one | Centro de custo |

## Views/Menus

- Extende views de stock.request

## Segurança

- Herda permissões do módulo stock_request

## Configuração

- Configurações > Estoque > Analítico

## Notas de Migração

- Migrado para v16 pelo OCA
