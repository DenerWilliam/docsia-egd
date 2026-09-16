# hr_work_entry

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_work_entry |
| Nome Amigável | hr_work_entry |
| Autor | Odoo S.A. |
| Versão | 16.0.2.1 |
| Repositório | https://www.odoo.com/app/employees |

## Descrição

Registros de trabalho.

## Dependencies

- hr_contract

## Models

### hr.work.entry
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome |
| employee_id | Many2one | Funcionário |
| contract_id | Many2one | Contrato |
| date_start | Datetime | Início |
| date_stop | Datetime | Fim |
| state | Selection | Status |

## Views/Menus

- **Menu**: RH > Registros de Trabalho
- **Views**: tree, form, calendar, gantt

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Registros de Trabalho

## Notas de Migração

- Módulo padrão Odoo
