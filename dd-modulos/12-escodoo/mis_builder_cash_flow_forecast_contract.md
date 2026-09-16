# mis_builder_cash_flow_forecast_contract

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | mis_builder_cash_flow_forecast_contract |
| Nome Amigável | Previsão Fluxo de Caixa Contrato |
| Autor | Escodoo |
| Versão | 16.0.1.0.0 |
| Repositório | https://github.com/Escodoo/mis-builder |

## Descrição

Previsão de fluxo de caixa baseada em contratos.

## Dependencies

- mis_builder_cash_flow
- contract

## Models

### mis.cash_flow.forecast.contract
| Campo | Tipo | Descrição |
|-------|------|-----------|
| contract_id | Many2one | Contrato |
| forecast_amount | Monetário | Valor previsto |

## Views/Menus

- **Menu**: Relatórios > Fluxo de Caixa > Previsão
- **Views**: tree, form

## Segurança

- Herda permissões dos módulos mis_builder_cash_flow e contract

## Configuração

- Sem configuração adicional

## Notas de Migração

- Customização Escodoo
