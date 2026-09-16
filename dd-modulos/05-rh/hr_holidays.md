# hr_holidays

## Informações Gerais

| Campo | Valor |
|-------|-------|
| Nome Técnico | hr_holidays |
| Nome Amigável | Ausências |
| Autor | Odoo S.A. |
| Versão | 16.0.2.1 |
| Repositório | https://www.odoo.com/app/time-off |

## Descrição

Gestão de férias, atestados e outros tipos de ausência.

## Dependencies

- hr

## Models

### hr.leave
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Descrição |
| employee_id | Many2one | Funcionário |
| holiday_status_id | Many2one | Tipo de ausência |
| date_from | Datetime | Data início |
| date_to | Datetime | Data fim |
| state | Selection | Status |

### hr.leave.type
| Campo | Tipo | Descrição |
|-------|------|-----------|
| name | Char | Nome do tipo |
| allocation_type | Selection | Tipo de alocação |

## Views/Menus

- **Menu**: RH > Ausências
- **Views**: tree, form, calendar, kanban

## Segurança

- **Grupos**: hr.group_hr_manager

## Configuração

- Configurações > RH > Tipos de Ausência

## Notas de Migração

- Módulo padrão Odoo
