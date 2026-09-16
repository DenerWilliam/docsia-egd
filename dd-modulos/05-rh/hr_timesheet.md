# hr_timesheet

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_timesheet |
| Nome Amigável | Folha de Ponto |
| Autor | Odoo S.A. |
| Versão | 16.0.1.2 |
| Repositório | https://www.odoo.com/app/timesheet |

## Descrição

Gestão de folha de ponto.

## Dependencies

- hr
- project

## Models

### account.analytic.line
| Campo | Tipo | Descrição |
|-------|------|-----------|
| employee_id | Many2one | Funcionário |
| project_id | Many2one | Projeto |
| task_id | Many2one | Tarefa |
| unit_amount | Float | Horas trabalhadas |

## Views/Menus

- **Menu**: RH > Folha de Ponto
- **Views**: tree, form, calendar, gantt

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Folha de Ponto

## Notas de Migração

- Módulo padrão Odoo
