# mis_builder_cash_flow_forecast_purchase

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mis_builder_cash_flow_forecast_purchase |
| Nome Amigável | Previsão Fluxo de Caixa Compra |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/mis-builder |

## Descrição

Previsão de fluxo de caixa baseada em compras.

## Dependencies

- mis_builder_cash_flow
- purchase

## Models

### mis.cash_flow.forecast.purchase
| Campo | Tipo | Descrição |
|-------|------|-----------|
| purchase_id | Many2one | Compra |
| forecast_amount | Monetário | Valor previsto |

## Views/Menus

- **Menu**: Relatórios > Fluxo de Caixa > Previsão
- **Views**: tree, form

## Segurança

- Herda permissões dos módulos mis_builder_cash_flow e purchase

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
