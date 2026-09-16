# Data Dictionary - RH

## Módulos

| Módulo | Nome | Autor | Versão |
|--------|------|-------|--------|
| hr | Funcionários | Odoo S.A. | 16.0.1.1 |
| hr_contract | Contratos de funcionários | Odoo S.A. | 16.0.1.0 |
| hr_timesheet | Logs de Tarefas | Odoo S.A. | 16.0.1.0 |
| hr_timesheet_sheet | HR Timesheet Sheet | OCA | 16.0.1.2.0 |
| hr_expense | Despesas | Odoo S.A. | 16.0.2.0 |
| hr_fleet | Histórico de Frota | Odoo S.A. | 16.0.1.0 |
| hr_hourly_cost | Salário do Funcionário por Hora | Odoo S.A. | 16.0.1.0 |
| hr_org_chart | HR Org Chart | Odoo S.A. | 16.0.1.0 |
| hr_contract_document | HR Contract Document | OCA | 16.0.1.0.0 |
| hr_course | HR Course | OCA | 16.0.1.1.2 |
| hr_employee_age | Employee Age | OCA | 16.0.1.0.1 |
| hr_employee_document | HR Employee Document | OCA | 16.0.1.0.1 |
| hr_employee_medical_examination | Hr Employee Medical Examination | OCA | 16.0.1.1.0 |
| hr_employee_ppe | Personal Protective Equipment (PPE) Management | OCA | 16.0.1.0.0 |
| hr_employee_relative | HR Employee Relatives | OCA | 16.0.1.0.0 |
| hr_expense_advance_clearing | Employee Advance and Clearing | OCA | 16.0.1.0.3 |
| hr_expense_invoice | Supplier invoices on HR expenses | OCA | 16.0.2.0.3 |
| hr_expense_journal | Select Expense Journal | OCA | 16.0.1.0.0 |
| hr_expense_remove_mobile_link | Remove Odoo mobile app links | OCA | 16.0.1.0.0 |
| hr_expense_tier_validation | Expense Tier Validation | OCA | 16.0.2.0.0 |
| hr_expense_work_acceptance | Expense Work Acceptance | OCA | 16.0.1.0.0 |
| hr_personal_equipment_request | Hr Personal Equipment Request | OCA | 16.0.1.0.0 |
| hr_personal_equipment_stock | Hr Personal Equipment Stock | OCA | 16.0.1.0.0 |
| hr_timesheet_analytic_restrictions | Hr Timesheet Analytic Restrictions | Escodoo | 16.0.1.0.0 |

## Dependências Principais

- `hr` → `base`
- `hr_contract` → `hr`
- `hr_timesheet` → `hr`, `account`

## Modelos Principais

### hr.employee
- Campo principal de funcionários
- Integração com contratos e ponto

### hr.contract
- Contratos de trabalho
- Cálculo de salários

### hr.timesheet.sheet
- Registo de horas
- Integração com projetos

## Notas

- Módulo `hr` é a base para todos os outros módulos de RH
- Integração com módulos de contabilidade e frota
