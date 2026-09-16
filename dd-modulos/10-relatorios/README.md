# Data Dictionary - Relatórios

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| mis_builder | MIS Builder | OCA | 16.0.5.8.0 |
| mis_builder_budget | MIS Builder Budget | OCA | 16.0.5.4.0 |
| mis_builder_cash_flow | MIS Builder Cash Flow | OCA | 16.0.1.1.0 |
| mis_builder_analytic | MIS Builder Analytic | OCA | 16.0.1.1.0 |
| mis_builder_cash_flow_by_month | Mis Builder Cash Flow By Month | Escodoo | 16.0.1.0.0 |
| mis_builder_cash_flow_forecast_contract | Mis Builder Cash Flow Forecast Contract | Escodoo | 16.0.1.0.0 |
| mis_builder_cash_flow_forecast_integration | Mis Builder Cash Flow Forecast Integration | Escodoo | 16.0.1.0.0 |
| mis_builder_cash_flow_forecast_purchase | Mis Builder Cash Flow Forecast Purchase | Escodoo | 16.0.1.0.0 |
| mis_builder_cash_flow_forecast_sale | Mis Builder Cash Flow Forecast Sale | Escodoo | 16.0.1.0.0 |
| report_xlsx | Base report xlsx | OCA | 16.0.2.0.2 |
| report_wkhtmltopdf_param | Report Wkhtmltopdf Param | OCA | 16.0.1.0.0 |
| bi_sql_editor | BI SQL Editor | OCA | 16.0.2.0.2 |

## Dependências Principais

- `mis_builder` → `account`
- `mis_builder_budget` → `mis_builder`
- `report_xlsx` → `base`

## Modelos Principais

### mis.report
- Relatórios MIS Builder
- KPIs e indicadores

### mis.report.style
- Estilos de relatórios
- Formatação

### mis.kpi
- KPIs definidos
- Cálculos automáticos

## Notas

- Módulo `mis_builder` é a base para relatórios financeiros
- Integração com módulos de contabilidade
