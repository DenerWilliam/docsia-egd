# mis_builder_cash_flow_forecast_sale

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mis_builder_cash_flow_forecast_sale |
| Nome Amigável | Previsão Fluxo de Caixa Venda |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/mis-builder |

## Descrição

Previsão de fluxo de caixa baseada em vendas.

## Dependencies

- mis_builder_cash_flow
- sale

## Models

### mis.cash_flow.forecast.sale
| Campo | Tipo | Descrição |
|-------|------|-----------|
| sale_id | Many2one | Venda |
| forecast_amount | Monetário | Valor previsto |

## Views/Menus

- **Menu**: Relatórios > Fluxo de Caixa > Previsão
- **Views**: tree, form

## Segurança

- Herda permissões dos módulos mis_builder_cash_flow e sale

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
