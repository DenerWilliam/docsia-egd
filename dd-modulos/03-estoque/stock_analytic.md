# stock_analytic

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | stock_analytic |
| Nome Amigável | Stock Analytic |
| Autor | Julius Network Solutions, OCA |
| Versão | 16.0.1.4.0 |
| Repositório | https://github.com/OCA/account-analytic |

## Descrição

Adiciona centros de custo analíticos em movimentações de estoque.

## Dependências

- stock
- account_analytic

## Modelos Principais

### stock.move (extensão)
| Campo | Tipo | Descrição |
|-------|------|-----------|
| analytic_account_id | Many2one | Centro de custo |

## Views/Menus

- Extende views de stock.move

## Segurança

- Herda permissões do módulo stock

## Configuração

- Configurações > Estoque > Analítico

## Notas de Migração

- Migrado para v16 pelo OCA
